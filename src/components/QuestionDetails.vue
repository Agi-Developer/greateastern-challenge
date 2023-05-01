<template>
  <!-- ============ QUESTION AREA ================ -->
  <div
    class="main d-flex mb-4 py-4"
    v-for="question in getQuestionDetails.items"
    :key="question.question_id"
    :question="question"
  >
    <div class="votes-control col-2 d-flex flex-column align-items-center">
      <a href class="vote" @click.prevent="upvoteQuestion(question._id)">
        <i class="fas fa-angle-up" :class="{ glowUp: checkUpvote }"></i>
      </a>
      <h5 class="m-0 counter-votes">{{ question.score }}</h5>
      <a href class="vote" @click.prevent="downvoteQuestion(question._id)">
        <i class="fas fa-angle-down" :class="{ glowDown: checkDownvote }"></i>
      </a>
    </div>
    <div class="question-info col-10 d-flex flex-column align-items-start">
      <h1>{{ question.title }}</h1>
      <small class="text-muted mb-4">
        created {{ moment.unix(`${question.creation_date}`).fromNow() }}, by
        <a href>{{ question.owner.username }}</a>
      </small>
      <div class="mb-5" v-html="question.body"></div>
      <!-- Tag list -->
      <h5>Tags:</h5>
      <div class="footer align-self-stretch d-flex justify-content-between">
        <div class="tag-list d-flex">
          <TagCard v-for="tag in question.tags" :key="tag._id" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useQuestionDetailsStore } from '../stores/questionDetails'
import TagCard from '@/components/TagCard.vue'
import moment from 'moment'
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(this)
const store = useQuestionDetailsStore()

const getQuestionDetails = computed(() => {
  return store.getQuestionDetails
})

onMounted(() => {
  store.fetchQuestionDetails(route.params.id)
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
