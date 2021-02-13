var dog,sadDog,happyDog;
var addFoodButton, feedButton;
var foodObj, foodStock;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the doge");
  feed.position(700,95);
  feed.mousePressed(feedDoge);

  addFood=createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()*-1)
  }
}
function addFood(){
  foodS++;
  dataBase.ref('/').update({
    Food:foods
  })
}

//function to add food in stock
