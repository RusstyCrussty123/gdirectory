function updateViews() {
  $.get("https://gdirectory.glitch.me/views", function(data) {
    if (data !== NaN) {
      localStorage.setItem("views", data);
      document.getElementById("views").innerHTML = "Views: " + data;
      console.log("Loaded views: " + data);
    } else {
      document.getElementById("views").innerHTML = "Failed to load views (If this keeps happening report it to rust#1622)";
      console.error("Failed loading views!!!");
    }
  });
}

updateViews();
setInterval(updateViews, 5000);

window.addEventListener("load", () => {
  createDialog("No","gaming");
  createDialog(
    "Check out the newly added emulator",
    "<a href='emulator.html'>Emulator</a><br/>N64 Roms, SNES Roms, NES Roms, GC Roms (Doom64, SM64, MK64, SMW)<br/>EmulatorGames.net"
  );
  createDialog(
    "Welcome",
    "[UPDATE]: Go check out our <a href='emulator.html'>⭐Emulator⭐!!!!</a>"
  );
  createDialog("Cat",`<div class="video"><video width="400" height="300" controls><source src="https://cdn.discordapp.com/attachments/758757809696407618/837761038547943464/vr.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>`);
  createDialog("Cat",`<div class="video"><video width="400" height="300" controls><source src="https://cdn.discordapp.com/attachments/758757809696407618/837752595011338290/video0-165-1.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>`);
  //createDialog("Cheat on Final Secrets Exposed! Here’s the Juicy Details", "<a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM3yg2GFktkQ%2Fmaxresdefault_live.jpg&f=1&nofb=1'>CLICK HERE TO FIND OUT!</a><br/><img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OFAA12J_kGQEOU2XjqWmagHaRn%26pid%3DApi&f=1'>")
  //createDialog("Join the discord", `<iframe src="https://discord.com/widget?id=839304180459241542&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`)
});

console.log("script.js for index loaded.");