const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
    surprise.classList.remove("hidden");

    btn.innerHTML = "❤️ Happy Birthday Mom ❤️";

    for(let i=0;i<25;i++){
        createHeart();
    }
});

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random()*30 + 20 + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const duration = Math.random()*3000 + 3000;

    heart.animate([
        {
            transform:"translateY(0)",
            opacity:1
        },
        {
            transform:"translateY(-120vh)",
            opacity:0
        }
    ],{
        duration:duration,
        easing:"linear"
    });

    setTimeout(()=>{
        heart.remove();
    },duration);
}

/* Confetti */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];

for(let i=0;i<250;i++){
    pieces.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*8+4,
        speed:Math.random()*3+1,
        color:`hsl(${Math.random()*360},100%,50%)`
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p=>{
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x,p.y,p.size,p.size);

        p.y += p.speed;

        if(p.y > canvas.height){
            p.y = -10;
        }
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
