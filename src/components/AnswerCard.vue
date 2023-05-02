<template>
  <div v-if="!loading" class="answer-card d-flex align-items-center pb-3 mb-3">
    <!-- =================== Votes -->
    <div class="answer-votes-control d-flex flex-column align-items-center col-1">
      <a href @click.prevent class="vote-answer">
        <i class="fas fa-angle-up glowUp"></i>
      </a>
      <h5 class="m-0 counter-votes">{{ answer.score }}</h5>
      <a href @click.prevent class="vote-answer">
        <i class="fas fa-angle-down glowUp"></i>
      </a>
    </div>
    <!-- =================== User Image -->
    <div class="user-image col-2">
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + answer.owner.profile_image + ')' }"
      ></div>
    </div>
    <!-- =================== Main Content -->
    <div class="main-content col-9 d-flex flex-column align-items-start pl-0">
      <small class="text-muted mt-3">
        reply from
        <a href>{{ answer.owner.display_name }}</a>
        ,
        {{ moment.unix(`${answer.creation_date}`).fromNow() }}
      </small>
      <div class="mb-5" v-html="answer.body"></div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
defineProps(['answer', 'loading'])
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

.glowUp {
  color: blue;
  text-shadow: 0 0 7px rgb(0, 96, 185);
}

.glowDown {
  color: blue;
  text-shadow: 0 0 7px rgb(0, 96, 185);
}

.answer-card {
  /* border-bottom: 1px solid rgb(185, 185, 185); */
  border-radius: 5px;
  transition: all 400ms ease;
}

.image {
  width: 90px;
  height: 90px;
  background-size: cover;
  border-radius: 100%;
  border: 2px solid grey;
}

i {
  font-size: 30px;
  position: relative;
  top: 0;
  transition: 70ms;
}

i.fa-angle-up:hover {
  top: -3px;
}

i.fa-angle-up:active {
  top: 0px;
}

i.fa-angle-down:hover {
  top: 3px;
}

i.fa-angle-down:active {
  top: 0px;
}

p {
  text-align: left;
}

a.vote-answer {
  color: black;
}

h5.counter-votes {
  font-family: 'Oswald';
}

button.editAns {
  font-size: 15px;
  font-family: 'Oswald';
}

label {
  font-family: 'Oswald';
}
</style>
