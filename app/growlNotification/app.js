require("./app.css")

class GrowlNotification {
  constructor(id) {
    this.state = { el: document.getElementById(id) };
  }

  show() {
    console.log("yo");
    this.addActiveClass()
    setTimeout(() => this.removeActiveClass(), 4000);
  }

  addActiveClass() {
    let el = this.state.el;
    el.className = el.className + " active";
  }

  removeActiveClass() {
    let el = this.state.el;
    el.className = el.className.replace(/ active/, '');
  }
}

let growl = new GrowlNotification("notification");
document.getElementById("show").addEventListener("click", element => {
  growl.show();
});
