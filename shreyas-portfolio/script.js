// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width/fontSize;

const drops=[];
for(let x=0;x<columns;x++) drops[x]=1;

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff9c";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters.charAt(Math.floor(Math.random()*letters.length));
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}
setInterval(draw,33);

// TERMINAL TEXT
const lines=[
"Booting secure portfolio...",
"Bypassing firewall...",
"Access granted.",
"Welcome to Shreyas V system"
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

