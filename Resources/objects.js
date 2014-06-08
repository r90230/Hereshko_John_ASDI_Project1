//Literal Object
var computer = {
	title: "Computer",
	size: 15.6,
	brand: "Apple",
	year: 2012,
	specific: function(){
		return "Mid" + " " + this.year.toString();
	},
	tellMeAboutYou: function(){
	  alert("I have a " + computer.specific() + " " + computer.brand + " MacBook Pro. It has a " +computer.size+ " inch screen measuring diagonally.");
	}
};

var iPad = {
	title: "iPad",
	model: "Air",
	size: "9.7 inch",
	os: "iOS 7.1",
	storage: "16 gigabyte",
	numbers: function(){
		return this.size + ", " + this.storage;
	},
	tellMeAboutYou: function (){
		alert("I own a " +iPad.numbers()+ " iPad " +this.model+ " that is running an operating system of " + this.os + ".");
	}
};

var finalFantasy = {
	title: "Final Fantasy",
	number: "XIV",
	type: "MMORPG",
	subscribers: 1800000,
	string: function(){
		return this.subscribers.toString();
	},
	tellMeAboutYou: function(){
		alert("One of my favorite games is Final Fantasy " +finalFantasy.number+ ": A Realm Reborn. It is a very immersive " +finalFantasy.type+ ". It has over " +finalFantasy.string()+ " subscribers.");
	}
};

var dragon = {
	title: "Dragon",
	type: "European",
	length: 72,
	breath: "lightning",
	weight: 3600,
	wingspan: function(){
		return this.length*2;
	},
	tellMeAboutYou: function(){
		alert("One of my favorite type of dragons is the " +dragon.type+ " dragon. With a length of " +dragon.length+ " feet, weighing in at " +dragon.weight+ " pounds, shooting " +dragon.breath+ "and with a wingspan of " +dragon.wingspan()+ " feet, these beasts are extraordinarily large.");
	}
};

var demon = {
	title: "Half-Demon Jay Valent",
	type: "Half-Demon",
	name: "Jay Valent",
	power: "Lightning",
	fullTitle: function(){
		return demon.type+ " " + demon.name;
	},
	tellMeAboutYou: function(){
		alert("My favorite original characters I use for role playing games is " +demon.fullTitle()+ ". He is a strong willed individual cursed with demonic powers, including the ability to launch " +demon.power+ " at enemies.");	
	}
};


//Dot matrix
var pizza = new Object();
pizza.title = "Pizza";
pizza.diameter = 16;
pizza.toppings = "pepperoni and sausage";
pizza.maker = "Pizza Hut";
pizza.area = function(diameter){
	var radius = diameter/2;
	var component = Math.pow(radius, 2);
	return 3.14159*component;
};
pizza.tellMeAboutYou = function(){
	pizza.area(pizza.diameter);
	alert("Hello! I am a " +pizza.diameter+" inch diameter pizza made by " +pizza.maker+" with " +pizza.toppings+ " and has an area of approximately " +pizza.area(pizza.diameter)+ " inches! Wow!");
};

var iPhone = new Object();
iPhone.title = "iPhone 5s";
iPhone.size = 4;
iPhone.model = "iPhone 5s";
iPhone.charger = "Lightning";
iPhone.maker = "Apple";
iPhone.combine = function(){
	return iPhone.maker+ " " +iPhone.model;
};
iPhone.tellMeAboutYou = function(){
	alert("Well hello there! I am an " +iPhone.combine()+ " with a " +iPhone.size+ " inch sized display and a " +iPhone.charger+ " charger port! That's pretty rad.");
};

var starbucks = new Object();
starbucks.title = "Starbucks";
starbucks.type = "Caramel Macchiato";
starbucks.size = "Venti";
starbucks.ounces = 20;
starbucks.company = "Starbucks";
starbucks.use = "late nights";
starbucks.combine = function(){
	return starbucks.size + " " + starbucks.type;
};
starbucks.tellMeAboutYou = function(){
	alert("Hey hey! Whenever I find myself heading to " +starbucks.company+ " for a good " +starbucks.combine()+ ", which is about " +starbucks.ounces+ " ounces, it's normally deep into the " +starbucks.use+ ".");
};

var sword = new Object();
sword.title = "Sword";
sword.blade = 25;
sword.hilt = 7;
sword.build = "Italian";
sword.length = function(){
	return sword.blade+sword.hilt;
};
sword.tellMeAboutYou = function(){
	alert("My " +sword.build+ " sword has a " +sword.blade+ " inch blade and a " + sword.hilt+ " inch hilt, which adds up to a " +sword.length()+ " inch lengthed weapon.");
};

var collection = new Object();
collection.title = "Collection",
collection.statues = 10;
collection.games = 35;
collection.favorites = 7;
collection.collectionFavorites = function(){
	var percent = collection.favorites/collection.games;
	return percent*100;
};
collection.collectionStatues = function(){
	var percent = collection.statues/collection.games;
	return Math.round(percent*100);
};
collection.tellMeAboutYou = function(){ 
	alert("I have a " +collection.games+ " piece video game collection. I have " +collection.statues+ " different statues I've gotten from collector versions of games. Furthermore, " +collection.favorites+ " of my collector games are my favorite games overall.");
	alert("Doing the math, " +collection.collectionFavorites()+ " percent of my collection are my favorites, and " +collection.collectionStatues()+ " percent of my collection came with a statue.");
};	
	
var objectArray = [computer, iPad, finalFantasy, dragon, demon, pizza, iPhone, starbucks, sword, collection];
	
//rows


for(var i=0, j=objectArray.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: objectArray[i].title,
		desc: objectArray[i].desc,
		hasChild: true
	});
	
	objectLayout.add(theRow);
	theRow.addEventListener("click", objectArray[i].tellMeAboutYou);
};

objectTable.add(objectLayout);