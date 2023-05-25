window.onload = function() {
  document.querySelector("#song1").play();
}


const platform = document.querySelector("img");
// const background1 = document.querySelector("#background1");
const canvas = document.querySelector("canvas");
const con = canvas.getContext("2d")
const scoreElement = document.querySelector("#scoreElement")
const bestElement = document.querySelector("#bestElement")
let score = 0

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const garvity = 0.5;

// Player creation
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.vilocity = {
      x: 0,
      y: 0,
    };
    this.width = 40;
    this.height = 130;

    this.image = lead
    this.frames = 0
    this.sprites = {
      stand: {
        standRight: standRight,
        standLeft: standLeft
      },
      run: {
        runRight: lead,
        runLeft: runLeft
      }
    }
    this.currentSprite = this.sprites.stand.standRight
  }
  draw() {
    con.drawImage(
      this.currentSprite,
      341.5 * this.frames,
      0,
      247,
      300,
      this.position.x,
      this.position.y,
      100,
      this.height)
  }
  
  update() {

    if(player.currentSprite === player.sprites.stand.standRight || player.currentSprite === player.sprites.stand.standLeft){
      this.frames = 0
    } else{

      this.frames++
    }
    if(this.frames > 28){
      this.frames = 0
    }
    this.draw();
    this.position.y += this.vilocity.y;
    this.position.x += this.vilocity.x;
    if (this.position.y + this.height + this.vilocity.y < canvas.height)
      this.vilocity.y += garvity;
  }
}

// Platform Creation
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = 300;
    this.height = 100;
  }
  draw() {
    con.drawImage(this.image, this.position.x, this.position.y, 300, 100);
  }
}

class Background {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    // console.log(this.image)
    // console.log(this.width)
    // console.log(this.height)
  }
  draw() {
    con.drawImage(this.image, this.position.x, this.position.y, window.innerWidth, window.innerHeight);
  }
}
class BadGuy {
  constructor({x, y}) {
    this.position = {
      x,
      y
      // x: Math.floor(Math.random() * (canvas.width - 25)),
      // y: Math.floor(Math.random() * (canvas.height - 25)),
    };
    this.vilocity = {
      x: 0,
      y: 0,
    };
    this.width = 60;
    this.height = 60;
    this.image = cactus
  }
    draw() {
      con.drawImage(this.image, this.position.x, this.position.y, 70, 70)}
  
    // update() {
    //   this.draw();
    //   this.position.y += this.vilocity.y;
    //   this.position.x += this.vilocity.x;
    //   if (this.position.y + this.height + this.vilocity.y < canvas.height)
    //     this.vilocity.y += garvity;
    // }
  }


let player = new Player();
let backgrounds = [
new Background({ x: 0, y: 0, image: background1 }),
new Background({ x: 1390, y: 0, image: background1 }),
new Background({ x: 2536, y: 0, image: background1 }),
new Background({ x: 3536, y: 0, image: background1 }),
new Background({ x: 4536, y: 0, image: background1 }),
]
  let backgrounds2 = [
  new Background({ x: 0, y: 0, image: background2 }),
  new Background({ x: 1536, y: 0, image: background2 }),
  new Background({ x: 2536, y: 0, image: background2 }),
  new Background({ x: 3536, y: 0, image: background2 }),
  new Background({ x: 4536, y: 0, image: background2 }),
]
let backgrounds3 = [
new Background({ x: 0, y: 0, image: background3 }),
new Background({ x: 1536, y: 0, image: background3 }),
new Background({ x: 2536, y: 0, image: background3 }),
new Background({ x: 3536, y: 0, image: background3 }),
new Background({ x: 4536, y: 0, image: background3 }),
]
  let backgrounds4 = [
  new Background({ x: 0, y: 0, image: background4 }),
  new Background({ x: 1536, y: 0, image: background4 }),
  new Background({ x: 2536, y: 0, image: background4 }),
  new Background({ x: 3536, y: 0, image: background4 }),
  new Background({ x: 4536, y: 0, image: background4 }),
]
  let backgrounds5 = [
  new Background({ x: 0, y: 0, image: background5 }),
  new Background({ x: 1536, y: 0, image: background5 }),
  new Background({ x: 2536, y: 0, image: background5 }),
  new Background({ x: 3536, y: 0, image: background5 }),
  new Background({ x: 4536, y: 0, image: background5 }),
]
  let backgrounds6 = [
  new Background({ x: 0, y: 0, image: background6 }),
  new Background({ x: 1536, y: 0, image: background6 }),
  new Background({ x: 2536, y: 0, image: background6 }),
  new Background({ x: 3536, y: 0, image: background6 }),
  new Background({ x: 4536, y: 0, image: background6 }),
]
let platforms = [
new Platform({ x: -7, y: 500, image: platform }),
new Platform({ x: 289, y: 500, image: platform }),
new Platform({ x: 800, y: 400, image: platform }),
new Platform({ x: 1360, y: 300, image: platform }),
new Platform({ x: 2198, y: 650, image: platform }),
new Platform({ x: 2680, y: 500, image: platform }),
new Platform({ x: 2880, y: 650, image: platform }),
new Platform({ x: 3500, y: 550, image: platform }),
new Platform({ x: 4100, y: 450, image: platform }),
new Platform({ x: 4700, y: 350, image: platform }),
new Platform({ x: 5300, y: 250, image: platform }),
new Platform({ x: 5900, y: 150, image: platform }),
new Platform({ x: 6500, y: 350, image: platform }),
new Platform({ x: 7100, y: 450, image: platform }),
new Platform({ x: 7700, y: 550, image: platform }),
new Platform({ x: 8300, y: 650, image: platform }),
new Platform({ x: 8900, y: 550, image: platform }),
new Platform({ x: 9500, y: 450, image: platform }),
new Platform({ x: 10100, y: 350, image: platform }),
new Platform({ x: 10700, y: 250, image: platform }),
new Platform({ x: 11300, y: 150, image: platform }),
new Platform({ x: 11900, y: 650, image: platform }),
new Platform({ x: 12500, y: 650, image: platform }),
new Platform({ x: 13100, y: 550, image: platform }),
new Platform({ x: 13700, y: 650, image: platform }),
new Platform({ x: 14300, y: 550, image: platform }),
new Platform({ x: 14900, y: 650, image: platform }),
new Platform({ x: 15200, y: 650, image: platform }),
new Platform({ x: 15800, y: 650, image: platform }),
new Platform({ x: 16100, y: 650, image: platform }),
new Platform({ x: 14900, y: 650, image: platform }),
new Platform({ x: 14900, y: 650, image: platform }),

// new Platform({ x: 1700, y: 500, image: platform }),
// new Platform({ x: 2026, y: 500, image: platform }),
// new Platform({ x: 2650, y: 500, image: platform }),
]
let badguys = [
    new BadGuy({x: 430, y: 431}),
    new BadGuy({x: 1470, y: 231}),
    new BadGuy({x: 2320, y: 581}),
    new BadGuy({x: 2990, y: 581}),
    new BadGuy({x: 4800, y: 281}),
    new BadGuy({x: 6000, y: 81}),
    new BadGuy({x: 6490, y: 281}),
    new BadGuy({x: 7180, y: 380}),
    new BadGuy({x: 7780, y: 480}),
    new BadGuy({x: 11900, y: 590}),
    new BadGuy({x: 11990, y: 590}),
    new BadGuy({x: 13200, y: 480}),
    new BadGuy({x: 14400, y: 480}),
    new BadGuy({x: 15050, y: 590}),
    new BadGuy({x: 15120, y: 590}),
    new BadGuy({x: 15190, y: 590}),
    new BadGuy({x: 15260, y: 590}),
    new BadGuy({x: 15930, y: 590}),
    new BadGuy({x: 16000, y: 590}),
    new BadGuy({x: 16070, y: 590}),
    new BadGuy({x: 16130, y: 590}),
]

// player.draw()
let movekeys = {
right: { pressed: false },
left: { pressed: false },
}

let scrollTrack = 0;
// let score = 0

/////////////////////////////////////////////////////////



// Restarting the game


function restart(){


 player = new Player();
 backgrounds = [
new Background({ x: 0, y: 0, image: background1 }),
new Background({ x: 1390, y: 0, image: background1 }),
new Background({ x: 2536, y: 0, image: background1 }),
new Background({ x: 3536, y: 0, image: background1 }),
new Background({ x: 4536, y: 0, image: background1 }),
]
   backgrounds2 = [
  new Background({ x: 0, y: 0, image: background2 }),
  new Background({ x: 1536, y: 0, image: background2 }),
  new Background({ x: 2536, y: 0, image: background2 }),
  new Background({ x: 3536, y: 0, image: background2 }),
  new Background({ x: 4536, y: 0, image: background2 }),
]
 backgrounds3 = [
new Background({ x: 0, y: 0, image: background3 }),
new Background({ x: 1536, y: 0, image: background3 }),
new Background({ x: 2536, y: 0, image: background3 }),
new Background({ x: 3536, y: 0, image: background3 }),
new Background({ x: 4536, y: 0, image: background3 }),
]
   backgrounds4 = [
  new Background({ x: 0, y: 0, image: background4 }),
  new Background({ x: 1536, y: 0, image: background4 }),
  new Background({ x: 2536, y: 0, image: background4 }),
  new Background({ x: 3536, y: 0, image: background4 }),
  new Background({ x: 4536, y: 0, image: background4 }),
]
   backgrounds5 = [
  new Background({ x: 0, y: 0, image: background5 }),
  new Background({ x: 1536, y: 0, image: background5 }),
  new Background({ x: 2536, y: 0, image: background5 }),
  new Background({ x: 3536, y: 0, image: background5 }),
  new Background({ x: 4536, y: 0, image: background5 }),
]
   backgrounds6 = [
  new Background({ x: 0, y: 0, image: background6 }),
  new Background({ x: 1536, y: 0, image: background6 }),
  new Background({ x: 2536, y: 0, image: background6 }),
  new Background({ x: 3536, y: 0, image: background6 }),
  new Background({ x: 4536, y: 0, image: background6 }),
]
 platforms = [
  new Platform({ x: -7, y: 500, image: platform }),
  new Platform({ x: 289, y: 500, image: platform }),
  new Platform({ x: 800, y: 400, image: platform }),
  new Platform({ x: 1360, y: 300, image: platform }),
  new Platform({ x: 2198, y: 650, image: platform }),
  new Platform({ x: 2680, y: 500, image: platform }),
  new Platform({ x: 2880, y: 650, image: platform }),
  new Platform({ x: 3500, y: 550, image: platform }),
  new Platform({ x: 4100, y: 450, image: platform }),
  new Platform({ x: 4700, y: 350, image: platform }),
  new Platform({ x: 5300, y: 250, image: platform }),
  new Platform({ x: 5900, y: 150, image: platform }),
  new Platform({ x: 6500, y: 350, image: platform }),
  new Platform({ x: 7100, y: 450, image: platform }),
  new Platform({ x: 7700, y: 550, image: platform }),
  new Platform({ x: 8300, y: 650, image: platform }),
  new Platform({ x: 8900, y: 550, image: platform }),
  new Platform({ x: 9500, y: 450, image: platform }),
  new Platform({ x: 10100, y: 350, image: platform }),
  new Platform({ x: 10700, y: 250, image: platform }),
  new Platform({ x: 11300, y: 150, image: platform }),
  new Platform({ x: 11900, y: 650, image: platform }),
  new Platform({ x: 12500, y: 650, image: platform }),
  new Platform({ x: 13100, y: 550, image: platform }),
  new Platform({ x: 13700, y: 650, image: platform }),
  new Platform({ x: 14300, y: 550, image: platform }),
  new Platform({ x: 14900, y: 650, image: platform }),
  new Platform({ x: 15200, y: 650, image: platform }),
  new Platform({ x: 15800, y: 650, image: platform }),
  new Platform({ x: 16100, y: 650, image: platform }),
  new Platform({ x: 14900, y: 650, image: platform }),
  new Platform({ x: 14900, y: 650, image: platform }),

// new Platform({ x: 1700, y: 500, image: platform }),
// new Platform({ x: 2026, y: 500, image: platform }),
// new Platform({ x: 2650, y: 500, image: platform }),
]
 badguys = [
  new BadGuy({x: 430, y: 431}),
  new BadGuy({x: 1470, y: 231}),
  new BadGuy({x: 2320, y: 581}),
  new BadGuy({x: 2990, y: 581}),
  new BadGuy({x: 4800, y: 281}),
  new BadGuy({x: 6000, y: 81}),
  new BadGuy({x: 6490, y: 281}),
  new BadGuy({x: 7180, y: 380}),
  new BadGuy({x: 7780, y: 480}),
  new BadGuy({x: 11900, y: 590}),
  new BadGuy({x: 11990, y: 590}),
  new BadGuy({x: 13200, y: 480}),
  new BadGuy({x: 14400, y: 480}),
  new BadGuy({x: 15050, y: 590}),
  new BadGuy({x: 15120, y: 590}),
  new BadGuy({x: 15190, y: 590}),
  new BadGuy({x: 15260, y: 590}),
  new BadGuy({x: 15930, y: 590}),
  new BadGuy({x: 16000, y: 590}),
  new BadGuy({x: 16070, y: 590}),
  new BadGuy({x: 16130, y: 590}),
]

// player.draw()
 movekeys = {
right: { pressed: false },
left: { pressed: false },
}

 scrollTrack = 0;
}

// ///////////////////////////////////////////////////////



// Annimation Loop
function animation() {
  // console.log(scrollTrack)
  // console.log(player.position.x)
//   con.drawImage(backgroundLayer1, 0, 0);
  requestAnimationFrame(animation);
  con.fillStyle = "white";
  con.fillRect(0, 0, canvas.width, canvas.height);
  backgrounds.forEach(function (background) {
    background.draw();
  });
  backgrounds2.forEach(function (background2) {
    background2.draw();
  });
  backgrounds3.forEach(function (background3) {
    background3.draw();
  });
  backgrounds4.forEach(function (background4) {
    background4.draw();
  });
  backgrounds5.forEach(function (background5) {
    background5.draw();
  });
  backgrounds6.forEach(function (background6) {
    background6.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  badguys.forEach(function (badguy) {
    badguy.draw();
  });
  
  player.update();

  if (movekeys.right.pressed && player.position.x < 500) {
    player.vilocity.x = 7;
  } else if ((movekeys.left.pressed && player.position.x > 100 || (movekeys.left.pressed && scrollTrack === 0 && player.position.x > 0))) {
    player.vilocity.x = -7;
  } else {
    player.vilocity.x = 0;

    if (movekeys.right.pressed) {
      scrollTrack += 10;
      score+= 1
      scoreElement.innerHTML = score
      console.log(score)
      platforms.forEach(function (platform) {
        platform.position.x += -10;
      })
      badguys.forEach(function (badguy) {
        badguy.position.x += -10;
      })
      backgrounds.forEach(function (background) {
        background.position.x += -1;
        // console.log('okayyy')
      })
      backgrounds2.forEach(function (background2) {
        background2.position.x += -1;
      });
      backgrounds3.forEach(function (background3) {
        background3.position.x += -2;
      });
      backgrounds4.forEach(function (background4) {
        background4.position.x += -3;
      });
      backgrounds5.forEach(function (background5) {
        background5.position.x += -4;
      });
      backgrounds6.forEach(function (background6) {
        background6.position.x += -5;
      });
    } else if (movekeys.left.pressed && scrollTrack > 0) {
      scrollTrack -= 10;
      platforms.forEach(function (platform) {
        platform.position.x += 10;
      });
      badguys.forEach(function (badguy) {
        badguy.position.x += 10;
      })
      backgrounds.forEach(function (background) {
        background.position.x += 1;
        // console.log('yesss')
      });
      backgrounds2.forEach(function (background2) {
        background2.position.x += 3;
      });
      backgrounds3.forEach(function (background3) {
        background3.position.x += 2;
      });
      backgrounds4.forEach(function (background4) {
        background4.position.x += 4;
      });
      backgrounds5.forEach(function (background5) {
        background5.position.x += 4;
      });
      backgrounds6.forEach(function (background6) {
        background6.position.x += 4;
      });
    }
  }

//   console.log(scrollTrack);

  // Collision detection
  platforms.forEach(function (platform) {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.vilocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.vilocity.y = 0;
    }
    // console.log(player.position.y)
  });

  badguys.forEach(function (badguy) {
    if (
      player.position.y + player.height + player.vilocity.y >=
        badguy.position.y &&
      player.position.x + player.width >= badguy.position.x &&
      player.position.x <= badguy.position.x + badguy.width
    ) {
      // window.location.reload()
      if(bestElement.innerHTML < score){
        bestElement.innerHTML = score
        
      }
      score = 0
      scoreElement.innerHTML = score
      restart()
    }
    // console.log(player.position.y)
    // console.log(player.position.x)
  });

  if (scrollTrack > 15810) {
    alert("Well, come and get you Chocolate after clicking OK, I guess. ¯\_(ツ)_/¯ ");
    window.location = 'https://youtu.be/xvFZjo5PgG0'
  }

  if(player.position.y > canvas.height) {
    
    if(bestElement.innerHTML < score){
      bestElement.innerHTML = score
      document.querySelector('.popupContainer').style.visibility = 'visible'
      setTimeout(() => {
        let get = document.querySelector('.popupContainer');
        get.style.visibility = 'hidden';
        }, 2000);

  //       setTimeout(function () {
  //         $popupContainer.style.opacity = 1;
  //       }, 100);

  //       $popupContainer.style.opacity = 0;
  //  setTimeout(function () {
  //    $popupContainer.style.visibility = 'hidden'
  //  }, 900);
    }
    score = 0
    scoreElement.innerHTML = score

  // animation()

    restart()
    // setInterval(() => {
    // clearInterval()
    
    // }, 2000);
}
}


// localStorage.setItem("score", 20)
// console.log(localStorage.getItem("score"))
// console.log(platform.position.y)

animation();
// function restart(){
//   console.log("restart")
//   clearInterval()
//   player.position.x = 100
//   player.position.y = 100
//   animation()
// }

// Player movement
window.addEventListener("keydown", function ({ keyCode }) {
  // console.log(keyCode)
  switch (keyCode) {
    case 68:
      movekeys.right.pressed = true;
      player.currentSprite = player.sprites.run.runRight
  }
  switch (keyCode) {
    case 65:
      movekeys.left.pressed = true;
      player.currentSprite = player.sprites.run.runLeft
  }
  switch (keyCode) {
    case 87:
      if(player.vilocity.y === 0){

        player.vilocity.y = -13;
      }
      console.log(player.vilocity.y)
    }
});

window.addEventListener("keyup", function ({ keyCode }) {
  // console.log(keyCode)
  switch (keyCode) {
    case 68:
      movekeys.right.pressed = false;
      player.currentSprite = player.sprites.stand.standRight
      break
    case 65:
      movekeys.left.pressed = false;
      player.currentSprite = player.sprites.stand.standLeft
  }
});
