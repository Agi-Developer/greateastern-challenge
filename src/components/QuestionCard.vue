<template>
  <div class="question-card d-flex flex-column py-3 mb-3 px-2">
    <div class="question d-flex align-items-center mb-2">
      <div class="upvotes px-1 py-0 btn btn-primary disabled mr-4">+ {{ question.score }}</div>
      <div class="text">
        <h2 class="m-2">
          <router-link
            :to="{ path: '/details/' + question.question_id }"
            v-bind:tooltip="question.title"
            append
          >
            <a>{{ question.title }}</a>
          </router-link>
        </h2>
      </div>
    </div>
    <div class="timestamp align-self-start mb-4 text-muted">
      created {{ moment.unix(`${question.creation_date}`).fromNow() }}, by
      <a href>{{ question.owner.display_name }}</a>
    </div>
    <div class="tag-votes d-flex">
      <div class="tags-list col-8 d-flex p-0">
        <TagCard v-for="tag in question.tags" :key="tag._id" :tag="tag" />
      </div>
      <div class="votes-info col-4 d-flex justify-content-between">
        <div class="votes text-muted">{{ question.score }} votes</div>
        <div class="answers text-muted">{{ question.answer_count }} answers</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TagCard from '@/components/TagCard.vue'
import moment from 'moment'

defineProps(['question', 'completeDetails'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

.question-card {
  width: 100%;
  border-bottom: 1px solid rgb(175, 175, 175);
}

.text h2 {
  font-family: 'Comfortaa';
  font-size: 20px;
}

.text a {
  text-decoration: none;
}

.timestamp {
  color: grey;
}

.votes-info {
  font-family: 'Oswald';
}
</style>
