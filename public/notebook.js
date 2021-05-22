// Notebook addon

function notebook(){
  this.button = null;
  this.define = (button)=>{
  this.button=button;
    
    button.addEventListener("click", ()=>{
      if (createDialog) {
        let div = documet.createElement("div");
        let area = document.createElement("textarea");
      }else{
        console.error("createDialog is not defined please use updater.js for the function.");
      }
    });
  }
}