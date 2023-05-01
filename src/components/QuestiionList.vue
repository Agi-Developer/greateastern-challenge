<template>
  <QuestionCard v-for="question in getAllQuestions.items" :key="question.question_id" :question="question" :complete-details="questionDetails"/>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useAllQuestionsStore } from "../stores/allQuestions";
import QuestionCard from './QuestionCard.vue'

const store = useAllQuestionsStore();
const getAllQuestions = computed(() => {
  return store.getAllQuestions;
});

const questionDetails = (updated) => {
  console.log(updated)
    // todos.value = todos.value.map((todo) => {
    //     if (todo.id === updatedTodo.id) {
    //         todo.isCompleted = true;
    //     }

    //     return todo;
    // });
};
onMounted(() => {
  store.fetchAllQuestions();
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
