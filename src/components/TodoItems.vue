<script setup>
  import { storeToRefs } from 'pinia';
  import useTodoStore from '../stores/todo';

  import TodoItem from './TodoItem.vue';

  const todoStore = useTodoStore();

  const { todos } = storeToRefs(todoStore);
</script>

<template>
  <div class="space-y-2">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>
