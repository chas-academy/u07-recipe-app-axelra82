import { Action } from '@ngrx/store';

export const GET_RECIPES = '[Recipes] Get';
export const SET_RECIPE = '[Recipe] Set';
export const SAVE_RECIPE = '[Recipe] Save';

export class GetRecipes implements Action {
    readonly type = GET_RECIPES;
    constructor(public payload: any) {}   
}
export class SetRecipe implements Action {
    readonly type = SET_RECIPE;
    constructor(public payload: any) {}   
}
export class SaveRecipe implements Action {
    readonly type = SAVE_RECIPE;
    constructor(public payload: any) {}   
}

export type All
    = SaveRecipe | 
    SetRecipe |
    GetRecipes;