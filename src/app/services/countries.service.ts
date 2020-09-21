import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CountryModel } from "./models/country-model";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  private readonly endpoint = "https://restcountries.eu/rest/v2/";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.endpoint);
  }
}
