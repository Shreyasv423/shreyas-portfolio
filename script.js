// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "01";
const fontSize = 16;
let columns = 0;

const drops=[];

function resizeCanvas(){
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
columns = Math.max(1, Math.floor(canvas.width / fontSize));
drops.length = columns;

for(let x=0;x<columns;x++){
if(typeof drops[x] !== "number"){
drops[x] = Math.random() * 10;
}
}
}

resizeCanvas();

function draw(){
ctx.fillStyle="rgba(5,8,22,0.11)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#58f8c6";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters.charAt(Math.floor(Math.random()*letters.length));
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}
let frameId;

function animate(){
draw();
frameId = window.requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
resizeCanvas();
});

// TERMINAL TEXT
const lines=[
"Loading portfolio...",
"Initializing interface...",
"Access granted."
];

let line=0;
let char=0;

function type(){
if(line<lines.length){
if(char<lines[line].length){
document.getElementById("typing").innerHTML+=lines[line].charAt(char);
char++;
setTimeout(type,40);
}else{
document.getElementById("typing").innerHTML+="<br>";
line++;
char=0;
setTimeout(type,400);
}
}
}
type();

