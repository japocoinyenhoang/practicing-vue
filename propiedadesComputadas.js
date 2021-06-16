new Vue({
  el: "#list", 
  data: {
    time: 0, 
    mySearch: '',
    user: {
      username: "Yen", 
      role: "admin"
    }, 
    tasks: [
      {name: 'Aprender JavaScript moderno', time: 3},
      {name: 'Aprender Vue', time: 16},
      {name: 'Aprender web Components', time: 23},
      {name: 'Aprender TypeScript', time: 20},
      {name: 'Hacer una todo list App', time: 16},
      {name: 'Pelearme con el codigo', time: 35},
      {name: 'Asentar conceptos', time: 11},
      {name: 'Mejorar como Front', time: 8},

    ]
  }, 
  computed: {
    tasksFilter() {
      return this.tasks.filter(task => {
        return task.time <= this.time && task.name.includes(this.mySearch);
      })
    }
  }
})