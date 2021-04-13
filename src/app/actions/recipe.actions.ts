import { Action } from '@ngrx/store';

export const RECIPE_LIST = '[Recipes] Get';
export const RECIPE_FILTER = '[Recipe] Filter';

export class RecipeList implements Action {
    readonly type = RECIPE_LIST;
    constructor(public payload: any) {}   
}
export class RecipeFilter implements Action {
    readonly type = RECIPE_FILTER;
    constructor(public payload: object) {}   
}

export type All
    = RecipeFilter |
    RecipeList;