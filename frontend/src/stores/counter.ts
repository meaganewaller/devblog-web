import { defineStore } from "pinia";
import { ref } from "vue";

export const counter = defineStore("counter", () => {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
