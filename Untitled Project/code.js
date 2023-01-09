var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["58f73284-a912-447c-ba5e-1a144267ce4c","9e64cf30-e65c-4fde-a648-23d432d154d1","247fcb7a-2ab8-4680-9357-60a852e8077a"],"propsByKey":{"58f73284-a912-447c-ba5e-1a144267ce4c":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"9e64cf30-e65c-4fde-a648-23d432d154d1":{"name":"kid_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ulYQxeMkaOybos7PNYVHyAjTgJNln7In/category_people/kid_16.png","frameSize":{"x":169,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"ulYQxeMkaOybos7PNYVHyAjTgJNln7In","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":169,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ulYQxeMkaOybos7PNYVHyAjTgJNln7In/category_people/kid_16.png"},"247fcb7a-2ab8-4680-9357-60a852e8077a":{"name":"kid_16_walking_1","sourceUrl":"assets/api/v1/animation-library/gamelab/A0LX2SfGn.jWJ09O9fBUqZX43JTLOSNE/category_people/kid_16_walking.png","frameSize":{"x":175,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"A0LX2SfGn.jWJ09O9fBUqZX43JTLOSNE","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/A0LX2SfGn.jWJ09O9fBUqZX43JTLOSNE/category_people/kid_16_walking.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  var ball = createSprite(38, 190, 10, 10);
  var dong1 = createSprite(100,130,10,10);
  dong1.shapeColor = "red";
  var dong2 = createSprite(215,130,10,10);
  dong2.shapeColor = "red";
  var dong3 = createSprite(165,250,10,10);
  dong3.shapeColor = "red";
  var dong4 = createSprite(270,250,10,10);
  dong4.shapeColor = "red";

dong1.velocityY= 5
dong2.velocityY= -5
dong3.velocityY= 5
dong4.velocityY= -5


ball.setAnimation("kid_16_1")
ball.scale= 0.1
dong1.setAnimation("car_black_1");
dong1.scale= 0.2
dong2.setAnimation("car_black_1");
dong2.scale= 0.2
dong3.setAnimation("car_black_1");
dong3.scale= 0.2
dong4.setAnimation("car_black_1");
dong4.scale= 0.2




function draw() {
   background("white")
  if(keyDown("d")){
  ball.x+=3
  ball.setAnimation("kid_16_walking_1")
  ball.scale = 0.1
  }
  if(keyDown("a")){
  ball.x-=3
  }
  
  
  
  
  var count = 0;
  createEdgeSprites()
  if(ball.isTouching(wall11)||
     ball.isTouching(wall12)||
     ball.isTouching(dong1)||
     ball.isTouching(dong2)||
     ball.isTouching(dong3)||
     ball.isTouching(dong4))
  {
     ball.x = 40;
     ball.y = 190;
     count = count + 1;
  }
  dong1.bounceOff(wall2)
  dong1.bounceOff(wall1)
  dong2.bounceOff(wall2)
  dong2.bounceOff(wall1)
  dong3.bounceOff(wall2)
  dong3.bounceOff(wall1)
  dong4.bounceOff(wall2)
  dong4.bounceOff(wall1)
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
