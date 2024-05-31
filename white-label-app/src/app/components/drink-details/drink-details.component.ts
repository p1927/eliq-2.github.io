import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkDetails } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss'],
})
export class DrinkDetailsComponent implements OnInit {
  drinkDetails: DrinkDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.drinkService.getDrinkDetails(id).subscribe((details: DrinkDetails) => {
      this.drinkDetails = details;
    });
  }
}
