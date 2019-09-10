import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './compenents/com1/com1.component';
import { Com2Component } from './compenents/com2/com2.component';
import { ShareService } from './services/share.service';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ErrorCodePipePipe } from './error-code-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    CustomPipePipe,
    ErrorCodePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
