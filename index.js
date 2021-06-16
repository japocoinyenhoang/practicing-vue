//vanilla JS
/*const myForm = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input[type='text']");
const tasks = [];

myForm.onsubmit = event => {
  event.preventDefault();
  tasks.push(input.value);

  var li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value= null;
}*/

new Vue({
  el: "#app", 
  data: {
    topic: "Vue Devtools",
    link: "http://vuejs.org",
    newTask: '',
    tasks :[] 
    , 
    baseURl: "http://placekitten.com", 
    height: 100, 
    width: 100
  }, 
  methods: {
    saveTask() {
      this.tasks.push(this.newTask);
      this.newTask='';

    }

  }, 
  computed: {
    completeURL() {
      return `${this.baseURl}/${this.width*3}/${this.height*3}`;
    }
  }

});