import { defineStore } from 'pinia';
import { getAll } from '../services/todoService';

const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),
  actions: {
    async getTodos() {
      this.todos = await getAll();
    },
  },
});

export default useTodoStore;
