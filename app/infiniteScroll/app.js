class Document {
  render() {
    let items = ["hello", "world"];
    document.write(this.renderItems(items));
  }

  renderItems(items) {
    return `<ul>${items.map(this.renderItem).join("")}</ul>`;
  }

  renderItem(item) {
    return `<li class="item">${item}</li>`;
  }
}

let d = new Document
d.render()
