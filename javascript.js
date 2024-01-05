// Dio koda je inspiriran youtube videom sa sljedeček linka: https://youtu.be/7jeDUKH6t_w?list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_
// Naglasit ću pored svakog koda da je kod inpiriran navedenim video-m

const canvas = document.getElementById('circle');
const ctx = canvas.getContext('2d');

let kruzici = [];

let score = 0;

let LEFT, UP, RIGHT, DOWN;

// klasa je inspirirana videom

class Ball{
    constructor(x, y, r, boja){
        this.x = x;
        this.y = y;
        this.r = r;
          this.boja = boja;
          kruzici.push(this);
    }

    drawBall(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = this.boja;
        ctx.fill();
        ctx.closePath();
    }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: "+score, 10, 20);
}


let glavnix = canvas.width / 2;
let glavniy = canvas.height / 2;


let mouseX = 0;
let mouseY = 0;

let kreni = false;
let reload = true;

canvas.addEventListener("mouseover", function() {
  kreni = true;
})


canvas.addEventListener("mousemove", function(e) {
  mouseX = e.offsetX
  mouseY = e.offsetY
  

})


let difficulty = 0;
let diff = false;
 
let easy = document.getElementById("easy");
easy.addEventListener("click", function() {
  difficulty = 0;
  diff = true;
  alert("Odabrali ste sljedeću težinu igre: LAHKO")

})


let medium = document.getElementById("medium");
medium.addEventListener("click", function() {
  difficulty = 1;
  diff = true;

  alert("Odabrali ste sljedeću težinu igre: SREDNJA TEŽINA")

})

let hard = document.getElementById("hard");
hard.addEventListener("click", function() {
  difficulty = 2;
  diff = true;
  alert("Odabrali ste sljedeće težinu igre: TEŠKO")

})


let da;
let ad;




function zaKursorom(b) {
  let dx = (mouseX - b.x) * .125;
  let dy = (mouseY - b.y) * .125;


  var razdaljina = Math.sqrt(dx * dx + dy * dy);
  if (razdaljina > 1) { 
      dx *= 3/razdaljina;
      dy *= 3/razdaljina;
  }
  if (b.x < 700 || b.x > 0 || b.y > 0 || b.y < 600) {
  b.x += dx;
  b.y += dy;

  }
}

let cudan = false;
let pojeden = false;
let pojedeen = [];
let brojac = 0;


// funkcija mainLoop je inspirirana videom

function mainLoop() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawScore();
  if (kreni) {

    for (let i = 0; i < kruzici.length - 1; i++) {
      if (i < (kruzici.length / 2) / 2){
        kretanjea(kruzici[i]);
      } else if (i < (kruzici.length / 2)) {
        kretanjed(kruzici[i]);

      } else if (i < (kruzici.length / 2) + ((kruzici.length / 2) / 2)){
        kretanjeb(kruzici[i]);
      } else if (i < (kruzici.length)) {
        kretanjec(kruzici[i]);

      }

}
  }    

    for (let i = kruzici.length - 1; i < kruzici.length; i++) {
      for (let j = 0; j < kruzici.length; j++) {
        eaten(kruzici[i], kruzici[j])
      }
    }
    
    if (kreni) {
    zaKursorom(glavni)
    };
    kruzici.forEach((b) => {
        b.drawBall();

    });
    requestAnimationFrame(mainLoop);
}




let ako = parseInt(randomBroj(0, 3));
let xxx = randomBroj(5, 20);
let brzina = 0;
let vxa = randomBroj(1, 2);
let vya = randomBroj(1, 2);
let vxb = randomBroj(1, 2);
let vyb = randomBroj(1, 2);
let vxc = randomBroj(1, 2);
let vyc = randomBroj(1, 2);
let vxd = randomBroj(1, 2);
let vyd = randomBroj(1, 2);
function kretanjea(b) {
  if (difficulty === 0 && diff) {
    da = 1;
    ad = 1.5;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);
 
    diff = false;
      
  } else if ( difficulty === 1 && diff) {
    da = 1.5;
    ad = 2.25;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
  } else if (difficulty === 2 && diff) {
    da = 2.25;
    ad = 3;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
    }
  
  

  if (b.x > 1700 || b.x < -1000) {
    vxa = -vxa;
  }
  if (b.y > 1600 || b.y < -900) {
    vya = -vya;
  }
  if (cudan) {
    if (ako === 0) {
      b.x += vxa*2;
      b.y += vya*2;
    }
   else if (ako === 1) {
    vxa = -vxa;
    vya = -vya;
    }
    
  }
  
    b.x += vxa;
    b.y += vya;
};
function kretanjeb(b) {
  if (difficulty === 0 && diff) {
    da = 1;
    ad = 1.5;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
      
  } else if ( difficulty === 1 && diff) {
    da = 1.5;
    ad = 2.25;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
  } else if (difficulty === 2 && diff) {
    da = 2.25;
    ad = 3;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
    }
    if (b.x > 1700 || b.x < -1000) {
      vxb = -vxb;
    }
    if (b.y > 1600 || b.y < -900) {
      vyb = -vyb;
    }
    if (cudan) {
      if (ako === 0) {
          b.x += vxb*2;
          b.y += vyb*2;
      
  
      } else if (ako === 1) {
      vxa = -vxa;
      vya = -vya;
      } else if ( ako === 2) {

      }
      
    }
  
    b.x += vxb;
  b.y += vyb;
};
function kretanjec(b) {
  if (difficulty === 0 && diff) {
    da = 1;
    ad = 1.5;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
      
  } else if ( difficulty === 1 && diff) {
    da = 1.5;
    ad = 2.25;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
  } else if (difficulty === 2 && diff) {
    da = 2.25;
    ad = 3;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
    }
    if (b.x > 1700 || b.x < -1000) {
      vxc = -vxc;
    }
    if (b.y > 1600 || b.y < -900) {
      vyc = -vyc;
    }
    if (cudan) {
      if (ako === 0) {
          b.x += vxc*2;
          b.y += vyc*2;
  
      } else if (ako === 1) {
      vxa = -vxa;
      vya = -vya;
      }
      
    }
  
    b.x += vxc;
    b.y += vyc;
};
function kretanjed(b) {
  if (difficulty === 0 && diff) {
    da = 1;
    ad = 1.5;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
      
  } else if ( difficulty === 1 && diff) {
    da = 1.5;
    ad = 1.5, 2.25;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
  } else if (difficulty === 2 && diff) {
    da = 2.25;
    ad = 3;
    vxa = randomBroj(da, ad);
    vya = randomBroj(da, ad);
    vxb = randomBroj(da, ad);
    vyb = randomBroj(da, ad);
    vxc = randomBroj(da, ad);
    vyc = randomBroj(da, ad);
    vxd = randomBroj(da, ad);
    vyd = randomBroj(da, ad);

    diff = false;
  
    }
  if (b.x > 1700 || b.x < -1000) {
    vxd = -vxd;
  }
  if (b.y > 1600 || b.y < -900) {
    vyd = -vyd;
  }
  if (cudan) {
    if (ako === 0) {
        b.x += vxd*2;
        b.y += vyd*2;

    } else if (ako === 1) {
    vxa = -vxa;
    vya = -vya;
    }
    
  }

  b.x += vxd;
  b.y += vyd;
};

let cudni = []; 
srednji = 0;
let ran = 0;
ran = randomBroj(3, 10);

let jedan = 0;
let dva = 0;
let tri = 0;
let cetiri = 0;


for (let h = 0; h < randomBroj(2, 3); h++){
for (let i = 0; i < ran; i++){
  srednji = parseInt(ran / 2);
  jedan = srednji;
  if (i === srednji){
let da = new Ball(randomBroj(-250, 0), randomBroj(-250, 0), randomBroj(15, 30), "green");
pojedeen.push(false);

} else if (i != srednji) {
let da = new Ball(randomBroj(-250, 0), randomBroj(-250, 0), randomBroj(15, 30), "green");
pojedeen.push(false)
}
}
ran = randomBroj(3, 10);

for (let i = 0; i < ran; i++){
  srednji = parseInt(ran / 2);
  dva = kruzici.length - srednji;

if (i === srednji){
let da = new Ball(randomBroj(800, 1050), randomBroj(700, 950), randomBroj(15, 30), "green");
pojedeen.push(false)

} else if (i != srednji) {
let da = new Ball(randomBroj(800, 1050), randomBroj(700, 950), randomBroj(15, 30), "green");
pojedeen.push(false)
}
}

ran = randomBroj(3, 10);

for (let i = 0; i < ran; i++){
  srednji = parseInt(ran / 2);
  tri = kruzici.length - srednji;

  if (i === srednji){
  let da = new Ball(randomBroj(-250, 0), randomBroj(700, 950), randomBroj(15, 30), "green");
  pojedeen.push(false)
  
  } else if (i != srednji) {
  let da = new Ball(randomBroj(-250, 0), randomBroj(700, 950), randomBroj(15, 30), "green");
  pojedeen.push(false)
  }
  }

ran = randomBroj(3, 10);

  for (let i = 0; i < ran; i++){
    srednji = parseInt(ran / 2);
    cetiri = kruzici.length - srednji;

    if (i === srednji){
  let da = new Ball(randomBroj(800, 1050), randomBroj(-250, 0), randomBroj(15, 30), "green");
  pojedeen.push(false)
  
  } else if (i != srednji) {
  let da = new Ball(randomBroj(800, 1050), randomBroj(-250, 0), randomBroj(15, 30), "green");
  pojedeen.push(false)
  }
  }
}


let glavni = new Ball(canvas.width / 2, canvas.height / 2, 25, "red");
pojedeen.push(false);

let indeks1 = 0;
let indeks2 = 1;
let l = parseInt(kruzici.length)

requestAnimationFrame(mainLoop);

let uslov = [];
for (let i = 0; i < kruzici.length - 1; i++){
  uslov.push(false);
}


function eaten(b1, b2) {
  indeks1 = kruzici.indexOf(b1);
  indeks2 = kruzici.indexOf(b2);

  if (pojedeen[indeks1] == false && pojedeen[indeks2] == false) {

  dx = b1.x - b2.x;
  dy = b1.y - b2.y;
  distance = Math.sqrt(dx * dx + dy * dy);
  let rad = b1.r + b2.r;
  
  if (rad < distance && !uslov[indeks2]) {
    if (b1.r > 30) {
      b2.r += 3;
      uslov[indeks2] = true;
    } else if (b1.r > 35) {
      b2.r += 4;
      uslov[indeks2] = false;

    }
  }
  else if (rad > distance) {
    if (b1.r < b2.r && reload) {
      pojedeen.splice(indeks1, 1);
      kruzici.splice(indeks1, 1);
      reload = false;
      alert("IZGUBILI STE! Klikom na 'OK' dugme započinjete novu igru.")
      document.location.reload();

    } else if (b1.r > b2.r) {
      if (indeks2 === jedan || indeks2 === dva || indeks2 === tri || indeks2 === cetiri){
        cudan = true;
      }
      pojedeen.splice(indeks2, 1);
      kruzici.splice(indeks2, 1);
      b1.r += b2.r * 0.05;
      score += 5;
      if (cudan){
        if (ako === 2) {
          b1.r /= 1.35;
          cudan = false;
          score -= 25;
        } else if (ako === 3) {
          b1.r *= 1.35;
          cudan = false;
          score += 10;
        }
          
      }
      if (score > 99 && reload) {
        alert("ČESTITAMO, POBIJEDILI STE! Klikom na 'OK' dugme započinjete novu igru.");
        document.location.reload();
        reload = false;
}
    }
    }
  }

};



function randomBroj(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


