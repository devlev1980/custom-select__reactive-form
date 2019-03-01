import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomSelectComponent } from './form/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
