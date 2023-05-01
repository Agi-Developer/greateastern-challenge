<template>
  <div class="add-question">
    <b-modal id="add-question" title="BootstrapVue">
      <div class="header" slot="modal-header">
        <h4>Ask a Question</h4>
      </div>
      <div class="body">
        <form>
          <!-- ============= title -->
          <label for>Title:</label>
          <b-form-input placeholder="title ..." v-model="formAddQuestion.title" autocomplete="off"></b-form-input>
          <!-- ============= content -->
          <label for>Question:</label>
          <b-form-textarea id="textarea" placeholder="ask something..." rows="3" max-rows="6"
            v-model="formAddQuestion.content"></b-form-textarea>
          <!-- ============= tags -->
          <label for>Tags:</label>
          <small class="text-muted ml-2">
            <i>(Maximum tags is 4)</i>
          </small>
          <tags-input element-id="tags" v-model="selectedTags" :existing-tags="existingTags"
            :typeahead="true"></tags-input>
        </form>
      </div>
      <div class="foter" slot="modal-footer">
        <button class="btn btn-primary mr-2" @click="addQuestion()">Ask</button>
        <button class="btn btn-danger" @click="cancel()">Cancel</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Swal from "sweetalert2";


</script>

<style scoped>
.header h4,
button,
label {
  font-family: "Oswald";
}

label {
  margin-top: 7px;
}
</style>