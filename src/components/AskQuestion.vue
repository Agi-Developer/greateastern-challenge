<template>
  <div class="add-question">
    <div class="header" slot="modal-header">
      <h4>Ask a Question</h4>
    </div>
    <div class="body">
      <form>
        <!-- ============= title -->
        <label for>Title:</label>
        <input
          type="text"
          class="form-control"
          placeholder="title ..."
          autocomplete="off"
          id="exampleInputEmail1"
        />
        <!-- ============= content -->
        <label for>Question:</label>
        <input
          type="text"
          class="form-control"
          placeholder="title ..."
          autocomplete="off"
          id="exampleInputEmail1"
        />
        <textarea
          class="form-control"
          id="textarea"
          placeholder="ask something..."
          rows="3"
          max-rows="6"
        ></textarea>
        <!-- ============= tags -->
        <label for>Tags:</label>
        <small class="text-muted ml-2">
          <i>(Maximum tags is 4)</i>
        </small>
      </form>
    </div>
    <div class="foter" slot="modal-footer">
      <button class="btn btn-primary mr-2" @click="$router.push('/')">Ask</button>
      <button class="btn btn-danger" @click="$router.push('/')">Cancel</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
</script>

<style scoped>
.header h4,
button,
label {
  font-family: 'Oswald';
}

label {
  margin-top: 7px;
}
</style>
