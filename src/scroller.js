let font;
let fontPromise = new Promise((resolve, reject) => {
    font = new Image();
    font.src = './outrun.gif';
    font.addEventListener('load', () => {
        resolve();
    });    
})

let c = document.getElementById('canvas');
c.width = 800;
c.height = 600;
let ctx = c.getContext('2d');

let map = [];
let text = "THIS IS SCROLLY TEXT";
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

    animate();
    
});

function animate(){

    ctx.fillRect(0,0,800,600);
    
    let l;
    offset -= 5;
    s += 0.05;
    if (offset < -1*text.length*35) { offset = 800 }
    for (let c=0; c<text.length; c++) {
        l = text.charCodeAt(c);
        if (l===32) { continue; }
        ctx.drawImage(font, map[l][0],map[l][1], 32,32, offset+c*35,275+(50*Math.sin((c/4)+s)), 32,32);
    }

    requestAnimationFrame(animate);
}