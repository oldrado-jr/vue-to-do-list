import { defineStore } from 'pinia';

const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),
  actions: {
    initFrom(payload) {
      this.todos = payload;
    },
  },
});

export default useTodoStore;
