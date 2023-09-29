const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: 'Nguyen',
      confirmName: ''
    };
  },
  methods: {
    confirmedName() {
      this.confirmName = this.name
    },
    add(num) {
      return this.counter = this.counter + num
    },
    reduce(num) {
      return this.counter = this.counter - num
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`
    },
    submitForm() {
      alert('Submitted')
    },
  }
});

app.mount('#events');
