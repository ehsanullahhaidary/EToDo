<template>
  <div class="home">
    <SidebbarMenu @is-add-active="setOpen" />
    <!-- <router-view /> -->
    <div
      @click="cancelTask()"
      class="display-none"
      :class="{ add: isAddActive === true }"
    ></div>
    <div :class="isAddActive === true ? 'add-round' : 'display-none'">
      <form class="form" action="">
        <div class="task-inputs">
          <input
            v-model="taskName"
            type="text"
            name="task-name"
            placeholder="Task name"
            class="task-name"
          />
          <input
            v-model="taskDescription"
            type="text"
            name="task-description"
            placeholder="Description"
            class="task-description"
          />
        </div>

        <span class="date-picker">
          <label for="task-date">Task Date:</label>
          <input
            v-model="taskDate"
            type="date"
            id="task-date"
            name="task-date"
          />
        </span>
        <div class="divider"></div>
        <div class="task-buttons">
          <input
            @click="cancelTask"
            class="cancel"
            type="button"
            value="Cancel"
          />
          <input
            :class="taskName === '' ? 'save-task' : 'save-task-medium-color'"
            @click="saveTask()"
            type="button"
            value="Add task"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebbarMenu from "../components/SidebbarMenu.vue";

const isAddActive = ref(false);
const taskName = ref("");
const taskDescription = ref("");
const taskDate = ref();

const setOpen = (n) => {
  isAddActive.value = n;
};

const saveTask = () => {
  console.log(taskName.value, taskDescription.value, taskDate.value);
};

const cancelTask = () => {
  isAddActive.value = false;
  taskName.value = "";
  taskDescription.value = "";
  taskDate.value = undefined;
};
</script>

<style>
.display-none {
  display: none;
}

.add {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.add-round {
  position: absolute;
  top: 100px;
  left: calc(50% - 290px);
  z-index: 7;
  width: 580px;
  height: 185px;
  background-color: white;
  box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  transition: width 0.2s ease-in-out, box-shadow 0.5s;
}

.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}

.task-inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
}

.task-inputs input {
  border: none;
  outline: none;
}

.task-name {
  font-size: larger;
  font-weight: 500;
}

.task-description {
  font-weight: 300;
  font-size: small;
}

.date-picker {
  margin-left: 15px;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  padding: 2px;
}

.date-picker input,
.date-picker label {
  font-size: small;
  color: gray;
  font-weight: 400;
}

input[type="date"] {
  position: relative;
}

/* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  background: transparent;
}

/* adjust increase/decrease button */
input[type="date"]::-webkit-inner-spin-button {
  z-index: 1;
}

/* adjust clear button */
input[type="date"]::-webkit-clear-button {
  z-index: 1;
}

input[type="date"] {
  border: none;
  outline: none;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgb(224, 224, 224);
}

.task-buttons {
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
}

.task-buttons input {
  padding: 7px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: small;
  font-weight: 500;
  transition: all 0.2s;
}

.cancel {
  cursor: pointer;
  color: rgb(83, 83, 83);
}
.cancel:hover {
  background-color: rgb(219, 219, 219);
}

.save-task {
  background-color: rgb(148, 240, 240);
  color: white;
  cursor: no-drop;
}
.save-task-medium-color {
  background-color: rgb(23, 255, 255);
  color: white;
  cursor: pointer;
}

.save-task-medium-color:hover {
  background-color: rgb(42, 201, 201);
}
</style>
