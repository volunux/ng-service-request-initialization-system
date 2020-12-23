import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuillModule } from 'ngx-quill';

import { Api_Token , Api_Config} from './configuration';
import { ErrorInterceptorService } from './general/error-interceptor.service';
import { TokenInterceptorService } from './authentication/token-interceptor.service';
import { appInterceptors } from './general/all-interceptors';

import { PipesModule } from './shared/pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FrameworkComponent } from './framework/framework.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GeneralModule } from './general/general.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({

  declarations: [
    AppComponent,
    GetStartedComponent,
    WelcomeComponent,
    FrameworkComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
  ],

  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    GeneralModule,
    PipesModule,
    AppRoutingModule,
  ],
  
  providers: [ {'provide' : Api_Token , 'useValue' : Api_Config , 'multi' : false } ,

  ...appInterceptors
   
   ],
  
  bootstrap: [AppComponent]
})

export class AppModule { 

}
