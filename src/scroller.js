
const canvasSizeX = 320;
const canvasSizeY = 160;

let fontPromise = new Promise((resolve, reject) => {

    font = new Image();
    font.src = 'data:image/gif;base64,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';
    font.addEventListener('load', () => {
        resolve();
    });    
});

let map = [];
let offset = canvasSizeX;
let s = 0;
let text = "SCROLLY MCSCROLLYFACE";

let scroller = document.createElement('canvas');
scroller.width = text.length*32;
scroller.height = 32;
let scrollerCtx = scroller.getContext('2d');

let c    = document.getElementById('canvas');
c.width  = canvasSizeX;
c.height = canvasSizeY;
let ctx  = c.getContext('2d');

fontPromise.then(()=>{

    ctx.fillRect(0,0,canvasSizeX,canvasSizeY);

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

    scrollerCtx = scrollerCtx.scale(1,-1);

    animate();
    
});

function animate(){

    ctx.fillRect(0,0,canvasSizeX,canvasSizeY);

    s += 0.05;
    offset -= 1;
    if (offset < -1*text.length*32) { offset = canvasSizeX }

    for (let x=0; x<text.length*32; x++) {
        ctx.drawImage(scroller, x,0, 1,32, x+offset+(7.5*Math.sin((x*0.05)+s)),(canvasSizeY*0.5)+(10*Math.sin((x*0.05)+s)), 2,32);
    }

    requestAnimationFrame(animate);

}
