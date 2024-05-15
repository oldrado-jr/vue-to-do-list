import { defineStore } from 'pinia';
import { getAll, addTodo, updateTodo } from '../services/todoService';

const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),
  actions: {
    async getTodos() {
      this.todos = await getAll();
    },
    async addTodo(data) {
      const addedTodo = await addTodo(data);
      this.todos.push(addedTodo);
    },
    async updateTodo(data, id) {
      await updateTodo(data, id);
    },
  },
});

export default useTodoStore;
