// VueJS
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// JUST JAVASCRIPT
// const goal = document.querySelector('#goal')
// const button = document.querySelector('#app button')
// const list = document.querySelector('#app ul')

// button.addEventListener('click', () => {
//     const goalValue = goal.value
//     const listEl = document.createElement('li')
//     listEl.textContent = goalValue
//     list.appendChild(listEl)
//     goal.value = ''
// })
