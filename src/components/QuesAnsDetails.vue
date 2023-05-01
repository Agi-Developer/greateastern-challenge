<template>
  <QuestionDetails :id="id" />
  <AnswerDetails />
</template>

<script setup>
import QuestionDetails from './QuestionDetails.vue'
import AnswerDetails from './AnswerDetails.vue'

defineProps(['id'])
</script>

<style scoped></style>
