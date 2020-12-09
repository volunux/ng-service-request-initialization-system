import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { SearchQuery } from '../general/search-query';

import { Api_Token , Api } from '../configuration';

import { ErrorMessagesService } from '../general/error-messages.service';

declare var script : any;

const myScripts = ["../assets/js/froala_editor.min.js","../assets/js/plugins/align.min.js","../assets/js/plugins/code_view.min.js","../assets/js/plugins/colors.min.js",
"../assets/js/plugins/fullscreen.min.js","../assets/js/plugins/font_family.min.js","../assets/js/plugins/font_size.min.js","../assets/js/plugins/image.min.js",
"../assets/js/plugins/entities.min.js","../assets/js/plugins/line_breaker.min.js","../assets/js/plugins/line_height.min.js","../assets/js/plugins/print.min.js",
"../assets/js/plugins/char_counter.min.js","../assets/js/plugins/url.min.js","../assets/js/plugins/word_paste.min.js","../assets/js/plugins/lists.min.js",
"../assets/js/plugins/link.min.js","../assets/js/third_party/image_tui.min.js","../assets/js/third_party/spell_checker.min.js","../assets/js/plugins/paragraph_style.min.js",
"../assets/js/plugins/paragraph_format.min.js","../assets/js/plugins/quote.min.js"];


const myScripts1 = [
  
  {'name' : 'align' , 'src' : "../assets/js/plugins/align.min.js"} ,
  {'name' : 'codeview' , 'src' : "../assets/js/plugins/code_view.min.js"} ,
  {'name' : 'colors' , 'src' : "../assets/js/plugins/colors.min.js"} ,
  {'name' : 'fullscreen' , 'src' : "../assets/js/plugins/fullscreen.min.js"} ,
  {'name' : 'fontfamily' , 'src' : "../assets/js/plugins/font_family.min.js"} ,
  {'name' : 'fontsize' , 'src' : "../assets/js/plugins/font_size.min.js"} ,
  {'name' : 'image' , 'src' : "../assets/js/plugins/image.min.js"} ,
  {'name' : 'entities' , 'src' : "../assets/js/plugins/entities.min.js"} ,
  {'name' : 'linebreaker' , 'src' : "../assets/js/plugins/line_breaker.min.js"} ,
  {'name' : 'lineheight' , 'src' : "../assets/js/plugins/line_height.min.js"} ,
  {'name' : 'print' , 'src' : "../assets/js/plugins/print.min.js"} ,
  {'name' : 'charcounter' , 'src' : "../assets/js/plugins/char_counter.min.js" } ,
  {'name' : 'url' , 'src' : "../assets/js/plugins/url.min.js"} ,
  {'name' : 'wordpaste' , 'src' : "../assets/js/plugins/word_paste.min.js"} ,
  {'name' : 'lists' , 'src' : "../assets/js/plugins/lists.min.js"} ,
  {'name' : 'link' , 'src' : "../assets/js/plugins/link.min.js"} ,
  {'name' : 'imagetui' , 'src' : "../assets/js/third_party/image_tui.min.js"} ,
  {'name' : 'spellcheck' , 'src' : "../assets/js/third_party/spell_checker.min.js"} ,
  {'name' : 'paragraphstyle' , 'src' : "../assets/js/plugins/paragraph_style.min.js"} ,
  {'name' : 'paragraphformat' , 'src' : "../assets/js/plugins/paragraph_format.min.js"} ,
  {'name' : 'quote' , 'src' : "../assets/js/plugins/quote.min.js"}  
]


@Injectable({

  'providedIn' : 'root'
})

export class ScriptService {
private scripts: any = {};

  constructor() {
    myScripts1.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  // load a single or multiple scripts
  load(scripts: string[]) {
    const promises: any[] = [];
    // push the returned promise of each loadScript call 
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    // return promise.all that resolves when all promises are resolved
    return Promise.all(promises);
  }
  
  // load the script
  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        const script = document.createElement('script') as any;
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        // cross browser handling of onLoaded event
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}
