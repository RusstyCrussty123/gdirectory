const mods = [
  {name:"zardy", url:"https://snipergaming888.github.io/zardy/"},
  {name:"cyrix", url:"https://fnf.run3.io/cyrix/3/?s"},
  {name:"matt", url:"https://run3.io/popgame/fnf/mattwii-2/?ddd"},
  {name:"witty", url:"https://fnf.run3.io/whitty/5/"},
  {name:"camelia", url:"https://fnf.run3.io/camellia/2/"},
  {name:"kapi", url:"https://hyperwood.github.io/kapi-v2/"} //https://v6p9d9t4.ssl.hwcdn.net/html/3671818/new-week6/index.html
]

let position = -1;

function changePosition(increment){
  position+=increment;
  document.getElementById("mod_frame").style.display = "block";
  document.getElementById("mod_frame").src = mods[position].url;
  document.getElementById("mod_name").innerHTML = mods[position].name;
}

window.addEventListener("load", ()=>{
  document.getElementById("next_mod").addEventListener("click", ()=>{
    changePosition(1);
  });
  document.getElementById("back_mod").addEventListener("click", ()=>{
    changePosition(-1);
  });
});