<script setup>
  import { ref } from 'vue';

  import useTodoStore from '../stores/todo';

  const todoStore = useTodoStore();

  const { addTodo } = todoStore;

  const title = ref('');

  const handleSubmit = async () => {
    if (!title.value) {
      return;
    }

    const data = {
      title: title.value,
      completed: false,
    };

    await addTodo(data);

    title.value = '';
  };
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex items-center px-4 bg-gray-900 h-15
rounded-sm border-l-2 border-green-400 mb-3">
    <input v-model="title" placeholder="Adicione um novo item ..." type="text"
      required class="bg-gray-900 placeholder-gray-500 text-gray-500
font-light focus:outline-none block w-full appearance-none leading-normal
py-3 pr-3">

    <button class="text-green-400 text-xs font-semibold
focus:outline-none" type="submit">
      ADICIONAR
    </button>
  </form>
</template>
