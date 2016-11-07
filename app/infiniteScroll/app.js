require("./app.css")
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class List {
  constructor(parent) {
    this.state = {
      parent: parent,
      items: []
    }
  }

  loadMoreItems() {
    this.updateState(state => {
      state.items = state.items.concat(["hello", "world"]);
      return state;
    })
  }

  updateState(updateFn) {
    console.log("[updateState] old");
    console.log(this.state);
    this.state = updateFn(this.state);
    console.log("[updateState] new")
    console.log(this.state);
    this.render();
  }

  render() {
    this.state.parent.innerHTML = this.renderItems();
  }

  renderItems() {
    const items = this.state.items;
    return `<ul>${items.map(this.renderItem).join("")}</ul>`;
  }

  renderItem(item) {
    return `<li class="item">${item}</li>`;
  }
}

let list = new List(document.getElementById("list"));
list.loadMoreItems();
list.loadMoreItems();
