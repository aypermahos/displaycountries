import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../countries.service";

@Component({
  selector: "codehub-service-example",
  templateUrl: "./service-example.component.html",
  styleUrls: ["./service-example.component.scss"],
  providers: [CountriesService],
})
export class ServiceExampleComponent implements OnInit {
  countries: any[];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((result) => {
      this.countries = result;
    });
  }
}
