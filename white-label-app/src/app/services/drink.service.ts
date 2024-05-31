import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Drink, DrinksResponse } from 'src/app/models/drink.model';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  filterOn: WritableSignal<string> = signal('');

  constructor(private http: HttpClient) {}

  getDrinks(): Observable<Drink[]> {
    return this.http
      .get<any>(`${this.apiUrl}/filter.php?a=Alcoholic`)
      .pipe(map((response: DrinksResponse) => response.drinks));
  }

  getDrinkDetails(id: string): Observable<Drink> {
    return this.http
      .get<any>(`${this.apiUrl}/lookup.php?i=${id}`)
      .pipe(map((response) => response.drinks[0]));
  }
}
