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
      let newItems =
        Array(50)
          .fill()
          .reduce((acc) => acc.concat(["hello", "world"]), [])

      state.items = state.items.concat(newItems);
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
    return `<ul>${items.map(this.renderItem).join("")}</ul>`
      + `<div id="count">${items.length}</div>`;
  }

  renderItem(item) {
    return `<li class="item">${item}</li>`;
  }
}

class InfiniteScroll {
  bindEvent(callback) {
    window.onscroll = (win => {
      console.log(win.pageY);
      console.log(document.body.scrollHeight)
      console.log(win.pageY >= document.body.scrollHeight * 0.6)
      if (win.pageY >= document.body.scrollHeight * 0.6) {
        callback();
      }
    });
  }
}

let list = new List(document.getElementById("list"));
list.loadMoreItems();
let scroll = new InfiniteScroll;
scroll.bindEvent(() => list.loadMoreItems());
