$(function() {

	var model = new DinnerModel();
	
	var exampleView = new ExampleView($("#exampleView"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailview = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model);

$("#sidesbarview").show();
$("#exampleView").hide();
$("#itemView").hide();
$("#detailView").show();
$("#WelcomeView").hide();
$("#DishSearchView").hide();
$("#ItemimgView").hide();
$("#selectdishview").hide();
$("#selectdishagainview").hide();

createNewDinner()
all.

});