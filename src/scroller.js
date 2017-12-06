let text = "SCROLLY MCSCROLLYFACE";

let font;
let fontPromise = new Promise((resolve, reject) => {
    font = new Image();
    font.src = './outrun.gif';
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

fontPromise.then(()=>{

    ctx.fillRect(0,0,800,600);

    let x, y;
    for (let i=0; i<26; i++) {

        x = (i%9) * 32;
        y = Math.floor(i/9) * 32;
        map[65+i] = [x,y];

    }

    for (let i=0; i<10; i++) {
        
        x = ((i+26)%9) * 32;
        y = Math.floor((i+26)/9) * 32;
        map[48+i] = [x,y];

    }

    for (let c=0; c<text.length; c++) {
        l = text.charCodeAt(c);
        if (l===32) { continue; }
        scrollerCtx.drawImage(font, map[l][0],map[l][1], 32,32, c*32,0, 32,32);
    }

    animate();
    
});

function animate(){

    ctx.fillRect(0,0,800,600);

    s += 0.05;
    offset -= 4;
    if (offset < -1*text.length*35) { offset = 800 }
    
    for (let x=0; x<text.length*32; x++) {
        ctx.drawImage(scroller, x,0, 1,32, 50+x+offset,275+(20*Math.sin((x*0.05)+s)), 1,32);
    }

    requestAnimationFrame(animate);
}
