import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceExampleComponent } from "./service-example/service-example.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ServiceExampleComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ServiceExampleComponent],
})
export class ServicesModule {}
