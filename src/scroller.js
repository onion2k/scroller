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


fontPromise.then(()=>{
    ctx.fillRect(0,0,800,600);

    let x, y;
    for (let i=0; i<36; i++) {

        x = (i%9) * 32;
        y = Math.floor(i/9) * 32;

        ctx.drawImage(font, x,y, 32,32, ((i%9)*50)+50,Math.floor(i/9)*50+50, 32,32);

    }

});
