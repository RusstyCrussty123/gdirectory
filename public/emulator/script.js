var link = "https://emulatorgames.net/";

window.addEventListener("load", ()=>{
  setTimeout(()=>{
    document.getElementById("game_frame").src=link;
    var w = document.getElementById("game_frame").contentWindow;
  },2000)
});