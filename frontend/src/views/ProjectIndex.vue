<template>
  <p class="text-center mb-3 dark:text-blue-300">Projects from <font-awesome-icon icon="fa-brands fa-github" />
  </p>
  <div class="max-h-[50vh] overflow-auto sm:w-4/12 mx-auto">
    <Loader v-if="loading" />
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-for="(project, index) in projects" :key="project.id">
      <a :href="project.html_url" target="_bl">
        <div class="bg-blue-300 mb-4 p-2 rounded-md shadow-md">
          <h2 class="font-bold text-xl">{{ ++index }} {{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
import Loader from '@/components/Loader.vue';

const projects = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
    try {
        loading.value = true;
        const res = await fetch('https://api.github.com/users/meaganewaller/repos');
        projects.value = await res.json();
        loading.value = false;
    } catch (ex) {
        error.value = ex;
        loading.value = false;
    }
});

</script>
