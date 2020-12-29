import { Injectable , Inject } from '@angular/core';
import { ReplaySubject , Observable , forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()

export class FroalaEditorService {

  private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) {}

  lazyLoadFroala(): Observable<any> {

    return forkJoin([

      this.loadScript('assets/js/froala_editor.min.js'),
      this.loadScript('assets/js/plugins/align.min.js'),
      this.loadScript('assets/js/plugins/code_view.min.js'),
      this.loadScript('assets/js/plugins/colors.min.js'),
      this.loadScript('assets/js/plugins/fullscreen.min.js'),
      this.loadScript('assets/js/plugins/font_family.min.js'),
      this.loadScript('assets/js/plugins/font_size.min.js'),
      this.loadScript('assets/js/plugins/entities.min.js'),
      this.loadScript('assets/js/plugins/line_breaker.min.js'),
      this.loadScript('assets/js/plugins/line_height.min.js'),
      this.loadScript('assets/js/plugins/print.min.js'),
      this.loadScript('assets/js/plugins/char_counter.min.js'),
      this.loadScript('assets/js/plugins/url.min.js'),
      this.loadScript('assets/js/plugins/word_paste.min.js'),
      this.loadScript('assets/js/plugins/lists.min.js'),
      this.loadScript('assets/js/plugins/paragraph_style.min.js'),
      this.loadScript('assets/js/plugins/paragraph_format.min.js'),
      this.loadScript('assets/js/plugins/quote.min.js'),


      this.loadStyle('assets/css/froala_editor.min.css'),
      this.loadStyle('assets/css/plugins/code_view.min.css'),
      this.loadStyle('assets/css/plugins/colors.min.css'),
      this.loadStyle('assets/css/plugins/fullscreen.min.css'),
      this.loadStyle('assets/css/plugins/image.min.css'),
      this.loadStyle('assets/css/plugins/line_breaker.min.css'),
      this.loadStyle('assets/css/plugins/char_counter.min.css'),
      this.loadStyle('assets/css/third_party/image_tui.min.css'),
      this.loadStyle('assets/css/third_party/spell_checker.min.css'),


    ]);
  }

  private loadScript(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = () => {
      this._loadedLibraries[url].next();
      this._loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this._loadedLibraries[url].asObservable();
  }

  private loadStyle(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const style = this.document.createElement('link');
    style.type = 'text/css';
    style.href = url;
    style.rel = 'stylesheet';
    style.onload = () => {
      this._loadedLibraries[url].next();
      this._loadedLibraries[url].complete();
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return this._loadedLibraries[url].asObservable();
  }
}