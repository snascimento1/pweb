import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // (optional)
import { MaterialModule } from '@blox/material';
//import { MdcToolbarRowDirective, MdcToolbarSectionDirective, MdcCardPrimaryDirective} from '@blox/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      // using FormsModule is optional
    MaterialModule, //MdcToolbarRowDirective, MdcToolbarSectionDirective, MdcCardPrimaryDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
