<template>
  <Loading v-if="loading" />
  <ErrorMessage v-if="error" :error="error.message" />
  <div v-if="answerDetails" class="detail">
    <!-- ============ ANSWER AREA ================ -->
    <div class="answer-area d-flex flex-column align-items-start">
      <div class="answers-list mt-4 align-self-stretch">
        <AnswerCard
          v-for="answer in answerDetails.items"
          :key="answer.answer_id"
          :answer="answer"
          :loading="loading"
          class="ansCard"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAnswerDetailsStore } from '../stores/answerDetails'
import AnswerCard from './AnswerCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { storeToRefs } from 'pinia'
const { answerDetails, loading, error } = storeToRefs(useAnswerDetailsStore())
const store = useAnswerDetailsStore()
// const getAnswerDetails = computed(() => {
//   return store.getAnswerDetails
// })
onMounted(() => {
  store.fetchAnswerDetails(route.params.id)
})
</script>

<style scoped>
.ansCard:nth-child(odd) {
  background-color: rgb(255, 245, 226);
}

i {
  font-size: 40px;
}

i.fa-angle-up,
i.fa-angle-down {
  position: relative;
  top: 0;
  transition: 70ms;
}

.glowUp {
  color: blue;
  text-shadow: 0 0 7px rgb(0, 96, 185);
}

.glowDown {
  color: blue;
  text-shadow: 0 0 7px rgb(0, 96, 185);
}

i.fa-angle-up:hover {
  top: -3px;
}

i.fa-angle-up:active {
  top: 0;
}

i.fa-angle-down:hover {
  top: 3px;
}

i.fa-angle-down:active {
  top: 0;
}

.main {
  border-bottom: 2px solid rgb(179, 179, 179);
  /* background-color: rgb(255, 245, 226); */
  /* border-radius: 5px; */
}

p {
  text-align: justify;
  font-family: cursive;
}

.question-info h1 {
  font-family: 'Oswald';
}

.answer-area {
  padding-left: 70px;
}

h4.reply-title {
  font-family: 'Oswald';
}

a.vote {
  color: black;
}

h5.counter-votes {
  font-family: 'Oswald';
}
</style>
