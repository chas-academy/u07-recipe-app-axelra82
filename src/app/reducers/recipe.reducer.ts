import * as PostActions from '../actions/recipe.actions';
import { Recipes } from '../models/recipes.model';

export type Action = PostActions.All;

const defaultState: Recipes = {
    saved: [],
    list: [],
    single: {
        idMeal: '',
        strMeal: '',
        strDrinkAlternate: '',
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
        strTags: '',
        strYoutube: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: '',
        strImageSource: '',
        strCreativeCommonsConfirmed: '',
        dateModified: '',
    }
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function postReducer(state: Recipes = defaultState, action: Action){
    
    switch (action.type) {
        case PostActions.GET_RECIPES:
            return newState(state, {list: action.payload });

        case PostActions.SET_RECIPE:
            return newState(state, {single: action.payload });
        
        case PostActions.SAVE_RECIPE:
            return newState(state, {saved: action.payload });
            
        default:
            return defaultState;
    }   
}