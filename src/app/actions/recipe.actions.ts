import { Action } from '@ngrx/store';

export const RECIPE_LIST = '[Recipes] Get';
export const RECIPE_SINGLE = '[Recipe] Set';

export class RecipeList implements Action {
    readonly type = RECIPE_LIST;
    constructor(public payload: any) {}   
}
export class RecipeSingle implements Action {
    readonly type = RECIPE_SINGLE;
    constructor(public payload: any) {}   
}

export type All
    = RecipeSingle |
    RecipeList;