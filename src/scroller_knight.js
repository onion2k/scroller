let text = "SCROLLY MCSCROLLYFACE";

let font;
let fontPromise = new Promise((resolve, reject) => {
    font = new Image();
    font.src = './knighthawks.png';
    font.addEventListener('load', () => {
        resolve();
    });    
});

let scroller = document.createElement('canvas');
scroller.width = text.length*32;
scroller.height = 32;
let scrollerCtx = scroller.getContext('2d');

let c = document.getElementById('canvas');
c.width = 800;
c.height = 600;
let ctx = c.getContext('2d');

let map = [];
let offset = 800;
let s = 0;

let charSizeX = 32;
let charSizeY = 25;

fontPromise.then(()=>{

    ctx.fillRect(0,0,800,600);

    let x, y;
    for (let i=0; i<70; i++) {
        x = (i%10) * charSizeX;
        y = Math.floor(i/10) * charSizeY;
        map[32+i] = [x,y];
    } 

    for (let c=0; c<text.length; c++) {
        l = text.charCodeAt(c);
        if (l===32) { continue; }
        scrollerCtx.drawImage(font, map[l][0],map[l][1], charSizeX,charSizeY, c*charSizeX,0, charSizeX,charSizeY);
    }

    animate();
    
});

function animate(){

    ctx.fillRect(0,0,800,600);

    s += 0.05;
    offset -= 2;
    if (offset < -1*text.length*35) { offset = 800 }
    
    for (let x=0; x<text.length*charSizeX; x++) {
        ctx.drawImage(scroller, x,0, 1,charSizeY, 50+x+offset,275+(20*Math.sin((x*0.05)+s)), 1,charSizeY);
    }

    requestAnimationFrame(animate);
}
