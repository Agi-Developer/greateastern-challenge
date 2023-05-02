<template>
  <Loading v-if="loading" />
  <ErrorMessage v-if="error" :error="error.message" />
  <div v-if="allQuestions" class="">
    <QuestionCard
      v-for="question in allQuestions.items"
      :key="question.question_id"
      :question="question"
    />
  </div>
  <div>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        @click="store.fetchAllQuestions(page)"
        class="btn btn-primary"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAllQuestionsStore } from '../stores/allQuestions'
import Loading from './LoadingAll.vue'
import ErrorMessage from './ErrorMessage.vue'
import QuestionCard from './QuestionCard.vue'
import { storeToRefs } from 'pinia'
const { allQuestions, loading, error } = storeToRefs(useAllQuestionsStore())
const store = useAllQuestionsStore()
// const getAllQuestions = computed(() => {
//   return store.getAllQuestions;
// });
const pages = ref([1, 2, 3])

onMounted(() => {
  store.fetchAllQuestions()
})
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
