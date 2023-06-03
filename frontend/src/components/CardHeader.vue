<script setup lang="ts">
  import router from '@/router';
  const route = router.currentRoute.value.path;
</script>

<template>
  <div class="">
    <ul class="flex justify-center">
      <li>
        <RouterLink to="/"
                    class="m-1 px-4 py-2 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:transition-all hover:duration-300 dark:text-white">
        Home</RouterLink>
        <RouterLink to="/about"
                    class="m-1 px-4 py-2 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:transition-all hover:duration-300 dark:text-white">
        About</RouterLink>
        <RouterLink to="/project"
                    class="m-1 px-4 py-2 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:transition-all hover:duration-300 dark:text-white">
        Project</RouterLink>
      </li>
    </ul>


    <div>
      <hr class="border-1 my-8 border-gray-400 sm:w-4/12 mx-auto" />
    </div>
  </div>
</template>
