import { defineStore } from 'pinia';
import { getAll, addTodo, updateTodo, deleteTodo } from '../services/todoService';

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
      const updatedTodo = await updateTodo(data, id);
      const index = this.todos.findIndex((todo) => todo.id === id);

      if (index >= 0) {
        this.todos.splice(index, 1, updatedTodo);
      }
    },
    async deleteTodo(id) {
      await deleteTodo(id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
  },
});

export default useTodoStore;
