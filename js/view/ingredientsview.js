var IngredientsView = function(container, model){

	var allIngredients = container.find("#allIngredients");



var hej = model.getAllIngredients();

	allIngredients.html(hej);
}