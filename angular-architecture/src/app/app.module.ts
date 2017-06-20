import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// application modules
import { CommercialModule } from './commercial/commercial.module';
import { SamplesModule } from './samples/samples.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// application components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // angular modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    // application modules
    CommercialModule,
    SamplesModule,
    SharedModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
