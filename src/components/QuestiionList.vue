<template>
  <QuestionCard v-for="question in getUsers.items" :key="question.question_id" :question="question"/>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "../stores/users";
import QuestionCard from './QuestionCard.vue'

const store = useUserStore();
// const msg = ref("Welcome to my Vuex Store");
const getUsers = computed(() => {
  return store.getUsers;
});
onMounted(() => {
  store.fetchUsers();
});

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
