import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as RecipeActions from '../../actions/recipe.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void { }

  onCheckboxChange(el: any) {
    const target = el.target;
    const value: string = target.parentElement.innerText.trim().toLowerCase();

    if (target.checked) {
      this.store.dispatch(new RecipeActions.RecipeFilterAdd(value));
    } else {
      this.store.dispatch(new RecipeActions.RecipeFilterRemove(value));
    }    
  }

}