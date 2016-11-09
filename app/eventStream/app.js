require("./app.css")

class EventStream {
  constructor(el) {
    let list = document.getElementById(el).children[0];
    this.state = {
      list: list
    };
  }

  addEvent(event) {
    let html = this.buildEventNode(event);
    this.state.list.innerHTML += html;
    this.shiftEventsUp(this.removeOldestEvent.bind(this));
  }

  buildEventNode(event) {
    return `<div class="event-stream-event">
        <div class="event-stream-event-timestamp">
          ${event.timestamp}
        </div>
        <div class="event-stream-event-body">
          <div class="event-stream-event-title">
            ${event.title}
          </div>
          <div class="event-stream-event-message">
            ${event.message}
          </div>
        </div>
      </div>`;
  }

  shiftEventsUp(then) {
    let shift = 15*2 + 1*2 + 61;
    this.state.list.className += " shift-up";
    setTimeout(() => {
      then();
      // TODO: @jbodah 2016-11-09: has a problem with fast clicking
      this.state.list.className = this.state.list.className.replace(/ shift-up/, "");
    }, 800);
  }

  removeOldestEvent() {
    this.state.list.removeChild(this.state.list.children[0]);
  }
}

let es = new EventStream("event-stream");
let n = 19;
document.getElementById("add-event").addEventListener("click", () => {
  let e = {
    title: "User Login",
    message: "User 123 has logged in.",
    timestamp: "Nov " + n
  };
  es.addEvent(e);
  n += 1;
})
