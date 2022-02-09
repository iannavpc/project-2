



let x = 200;
let y = 400;
let xspeed = 10;
let yspeed = 10;

let a = 200;
let b = 400;
let aspeed = 20;
let bspeed = 10;

let c = 200;
let d = 400;
let cspeed = 7;
let dspeed = 20;

let e = 200;
let f = 400;
let espeed = 10;
let fspeed = 20;

let g = 200;
let h = 400;
let gspeed = 5;
let hspeed = 8;

let i = 200;
let j = 400;
let ispeed = 20;
let jspeed = 9;

let k = 200;
let l = 400;
let kspeed = 40;
let lspeed = 5;

let m = 200;
let n = 400;
let mspeed = 15;
let nspeed = 20;

let o = 200;
let p = 400;
let ospeed = 15;
let pspeed = 20;


let r = 25;





function setup() {

    frameRate(30);

let a;

let b;

let c; 

let d; 




    color1 = random(0, 255);
    color2 = random(0, 255);
    color3 = random(0, 255);
    createCanvas(windowWidth,windowHeight);
    
    stroke(color1, color2, color3); 
    a = height / 4;
    
}


function draw() {
    


    background(0);


  
    fill(255);
    ellipse(x,y,r*2,r*2);
    x+=xspeed;
    y+=yspeed;

 if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

  fill(255);
  ellipse(x,y,r*2,r*2);
  x+=xspeed;
  y+=yspeed;

if (x > width - r || x < r) {
  xspeed = -xspeed;
}
if (y > height - r || y < r) {
  yspeed = -yspeed;
}

fill(255);
    ellipse(a,b,r*2,r*2);
    a+=aspeed;
    b+=bspeed;

 if (a > width - r || a < r) {
    aspeed = -aspeed;
  }
  if (b > height - r || b < r) {
    bspeed = -bspeed;
  }

  fill(255);
    ellipse(c,d,r*2,r*2);
    c+=cspeed;
    d+=dspeed;

 if (c > width - r || c < r) {
    cspeed = -cspeed;
  }
  if (d > height - r || d < r) {
    dspeed = -dspeed;
  }
  
  fill(255);
    ellipse(e,f,r*2,r*2);
    e+=espeed;
    f+=fspeed;

 if (e > width - r || e < r) {
    espeed = -espeed;
  }
  if (f > height - r || f < r) {
    fspeed = -fspeed;
  }
  
  fill(255);
    ellipse(g,h,r*2,r*2);
    g+=gspeed;
    h+=hspeed;

 if (g > width - r || g < r) {
    gspeed = -gspeed;
  }
  if (h > height - r || h < r) {
    hspeed = -hspeed;
  }

  fill(255);
    ellipse(i,j,r*2,r*2);
    i+=ispeed;
    j+=jspeed;

 if (i > width - r || i < r) {
    ispeed = -ispeed;
  }
  if (j > height - r || j < r) {
    jspeed = -jspeed;
  }

  fill(255);
    ellipse(k,l,r*2,r*2);
    k+=kspeed;
    l+=lspeed;

 if (k > width - r || k < r) {
    kspeed = -kspeed;
  }
  if (l > height - r || l < r) {
    lspeed = -lspeed;
  }

  fill(255);
    ellipse(m,n,r*2,r*2);
    m+=mspeed;
    n+=nspeed;

 if (m > width - r || m < r) {
    mspeed = -mspeed;
  }
  if (n > height - r || n < r) {
    nspeed = -nspeed;
  }

  fill(255);
    ellipse(o,p,r*2,r*2);
    o+=pspeed;
    o+=pspeed;

 if (o > width - r || o < r) {
    ospeed = -ospeed;
  }
  if (p > height - r || p < r) {
    pspeed = -pspeed;
  

  }

  

   
stroke(0,0,0);
strokeWeight(20);
   //big rect left up
   fill(255,200,200);
rect(170,10,480,320)

line(20, a, width, a);
    strokeWeight(10);
    a = a - 1;
    if (a < 9) {
      a = height;

    }
      line(20, 300, width, a);
    strokeWeight(10);
    a = a - 0.5;
    if (a < 9) {
      a = height;
    }

    line(a, 600, width, a);
    strokeWeight(10);
    a = a - 0.5;
    if (a < 9) {
      a = height;
    
    }

//big rect right up
stroke(0,0,0);
strokeWeight(20);
fill(255,150,100);
   rect(650,10,520,320);

   line(20, 30, width, d);
    strokeWeight(10);
    d = d - 0.5;
    if (a < 9) {
      d = height;
    }
      line(650, 10, width, d);
    strokeWeight(10);
    d = d - 0.5;
    if (a < 9) {
      d = height;

    }

    line(650, 10, width, d);
    strokeWeight(10);
    d = d - 0.5;
    if (a < 7) {
      d = height;
    }

    line(650, 300, width, d);
    strokeWeight(10);
    d = d - 0.5;
    if (a < 4) {
      d = height;

    }
   //big rect left down
   stroke(0,0,0);
strokeWeight(20);
fill(150,0,200);
   rect(170,330,480,330);

   line(100, 500, width, b);
    strokeWeight(10);
    b = b - 0.5;
    if (b < 9) {
      b = height;
    }

    line(100, 700, width, b);
    strokeWeight(10);
    b = b -0.5;
    if (b < 9) {
      b = height;
    

    }

    line(100, 900, width, b);
    strokeWeight(10);
    b = b - 0.5;
    if (b < 9) {
      b = height;

    }

   //big rect right down
   stroke(0,0,0);
strokeWeight(20);
fill(20,200,130);
   rect(650,330,520,330);

   line(650, 100, width, c);
    strokeWeight(10);
    c = c - 0.5;
    if (c < 9) {
      c = height;

    }

line(750, 700, width, c);
strokeWeight(10);
c = c - 0.5;
if (c < 9) {
 c = height;
    }

    line(750, 330, width, c);
strokeWeight(10);
c = c - 0.5;
if (c < 9) {
 c = height;
 
}

line(750, 800, width, c);
strokeWeight(10);
c = c - 0.5;
if (c < 9) {
 c = height;

}



   

  



   
    
  
}