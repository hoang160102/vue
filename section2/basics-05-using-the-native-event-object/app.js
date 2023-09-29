const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name =''
    }
  },
  watch: {
    name(value) {
      this.fullName = value + ' ' + 'Nguyen'
    }
  },
  computed: {
    // fullName() {
    //   console.log('Runnung again...')
    //   if (this.name === '') {
    //     return ''
    //   }
    //   return this.name + ' ' + 'Nguyen'
    // }
  }
});

app.mount('#events');
