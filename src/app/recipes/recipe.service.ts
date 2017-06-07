import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test.', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png'),
    new Recipe('Another Test Recipe', 'This is also a test.', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png'),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}