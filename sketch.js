//Create variables here
var dog,happyDog,database,foodS,foodStock, dogImage, dogImage2;
var buttonFeed,buttonFood
var feedTime,lastFed
var foodObj

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
  
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dogSprite = createSprite(250,300,10,10)
  
  dogSprite.addImage(dogImage)
  dogSprite.scale = 0.2
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87) 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dogSprite.addImage(dogImage2)
}
drawSprites()

fill("red")
text("Food Remaining :"+foodS,170,200)
textSize(20)
text("Note:Press Up Arrow To Feed The Dog",50,50)
}


//feed 
  //add styles here



function readStock(data){
  foodS = data.val()

}
function writeStock(x){
  if(x<=0){
x=0
  }else{
    x=x-1 
  }
  database.ref('/').update({
    Food:x 
  })
  }

  