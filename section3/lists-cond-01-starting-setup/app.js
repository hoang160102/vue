const app = Vue.createApp({
  data() {
    return {
      goals: [],
      input: '',
      person: {
        name: 'Hoang',
        age: 21
      }
    };
  },
  methods: {
    addGoal() {
      if (this.input.length > 0) {
        this.goals.push(this.input)
      }
    },
    removeGoal(i) {
      this.goals.splice(i, 1)
    }
  } 
});

app.mount('#user-goals');
