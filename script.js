let app = new Vue({
  el: "#app",
  data: {
    items: ["Example 1", "Example 2"],
    content: "",
  },
  methods: {
    add() {
      if (this.content !== "") {
        this.items.push(this.content);
        this.content = "";
        this.refreshLocal();
      }
    },
    remove(index) {
      this.items.splice(index, 1);
      this.refreshLocal();
    },
    refreshLocal() {
      localStorage.setItem("localItems", JSON.stringify(this.items));
    },
    clearAll() {
      this.items = [];
      this.refreshLocal();
    },
  },
});

let localItems = localStorage.getItem("localItems");
if (localItems) {
  app.items = JSON.parse(localItems);
}