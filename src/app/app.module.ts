import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { ICountry } from './country';
import { AppComponent } from './app.component';
import { AgmCoreModule } from "@agm/core";
import { Observable }     from 'rxjs/Observable'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC7sVm9kxTXjVmH-u22ISLeiy7M-y2Uf6c',
      libraries:["places"]
    })
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
  }

  
  

