import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FilterComponent } from "./filter-component/filter.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatTableModule],
  declarations: [AppComponent, HelloComponent, FilterComponent],
  bootstrap: [AppComponent],
  exports: [FilterComponent]
})
export class AppModule {}
