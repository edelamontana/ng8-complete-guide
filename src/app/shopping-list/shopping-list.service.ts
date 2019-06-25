import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // Como push solo añada un elemento a la lista. 
        // Si anteponemos el operador spread (...) podemos hacer que trate el contenido del array, añadiendo independientemente los elementos
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
