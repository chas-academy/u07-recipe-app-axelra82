import { Action } from '@ngrx/store';

export const RECIPE_LIST = '[Recipes] Get';
export const RECIPE_LIST_FILTER = '[Recipes] Filter';
export const RECIPE_FILTER_ADD = '[Recipes] Filter Add';
export const RECIPE_FILTER_REMOVE = '[Recipes] Filter Remove';

export class RecipeList implements Action {
    readonly type = RECIPE_LIST;
    constructor(public payload: any) {};
}
export class RecipeListFilter implements Action {
    readonly type = RECIPE_LIST_FILTER;
}
export class RecipeFilterAdd implements Action {
    readonly type = RECIPE_FILTER_ADD;
    constructor(public payload: string) {};
}
export class RecipeFilterRemove implements Action {
    readonly type = RECIPE_FILTER_REMOVE;
    constructor(public payload: string) {};
}

export type All
    = RecipeFilterRemove |
    RecipeFilterAdd |
    RecipeListFilter |
    RecipeList;