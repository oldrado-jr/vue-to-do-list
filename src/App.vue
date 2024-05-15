<script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import { getAll } from './services/todoService';
  import useTodoStore from './stores/todo';

  import TodoSpinner from './components/TodoSpinner.vue';
  import TodoFormAdd from './components/TodoFormAdd.vue';
  import TodoItems from './components/TodoItems.vue';
  import TodoEmpty from './components/TodoEmpty.vue';

  const todoStore = useTodoStore();

  const { todos } = storeToRefs(todoStore);
  const { initFrom } = todoStore;

  const loading = ref(true);

  (async () => {
    try {
      initFrom(await getAll());
    } finally {
      loading.value = false;
    }
  })();
</script>

<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoFormAdd />
        <TodoItems v-if="todos.length > 0" />
        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>
