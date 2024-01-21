<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header--user">
        <img src="../assets/ehsan.png" alt="user" class="user-image" />
        <span class="user-name">Ehsan</span>
        <img src="../assets/sidebarIcons/arrow-down.svg" alt="" />
      </div>
    </div>

    <div class="sidebar__body">
      <div
        @click="$emit('is-add-active', true)"
        class="sidebar__body--add-todo sidebar__body--items"
      >
        <img src="../assets/sidebarIcons/add.svg" alt="search" />
        <span class="add-todo">Add task</span>
      </div>
      <div class="sidebar__body--search sidebar__body--items">
        <img class="test" src="../assets/sidebarIcons/search.svg" alt="add" />
        <span class="add-todo">Search</span>
      </div>
      <div
        @click="isActive = 'inbox'"
        :class="[
          isActive === 'inbox' ? 'selected' : '',
          'sidebar__body--items',
        ]"
      >
        <img src="../assets/sidebarIcons/inbox.svg" alt="inbox" />
        <span class="add-todo">Inbox</span>
      </div>
      <div
        @click="today(), (isActive = 'today')"
        :class="[
          isActive === 'today' ? 'selected' : '',
          'sidebar__body--items',
        ]"
      >
        <img src="../assets/sidebarIcons/today.svg" alt="today" />
        <span class="add-todo">Today</span>
      </div>
    </div>

    <div class="sidebar__footar">
      <div @click="logout()" class="sidebar__body--search sidebar__body--items">
        <img class="test" src="../assets/sidebarIcons/logout.svg" alt="add" />
        <span class="add-todo">Logout</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

const isActive = ref("inbox");

const logout = () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("password");
  router.push({ path: "/login" });
};

const today = () => {
  router.push({ path: "/today" });
};
</script>

<style>
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: hsl(175, 100%, 97%);
  padding: 12px 12px;
  user-select: none;
  display: flex;
  flex-direction: column;
}

.sidebar__header--user {
  height: 32px;
  width: 105px;
  display: flex;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 4px;
  align-items: center;
  overflow: hidden;
  gap: 2px;
}
.sidebar__header--user:hover {
  background-color: hsl(180, 100%, 90%);
  /* background-color: #6dffff; */
}

.user-image {
  width: 26px;
}

.user-name {
  font-size: 13px;
  margin-left: 5px;
  margin-bottom: -2px;
  font-weight: bold;
}

.sidebar__body {
  margin-top: 12px;
}

.sidebar__body--items {
  min-height: 34px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;
  font-size: 15px;
}

.selected {
  background-color: hsl(180, 100%, 92%);
}

.sidebar__body--items:hover {
  background-color: hsl(180, 100%, 92%);
}

.sidebar__body--items img {
  margin: 0 6px 0 -6px;
}

.sidebar__body--add-todo {
  margin-bottom: 5px;
  color: #1ae2e2;
}

.sidebar__body--add-todo:active {
  scale: 0.97;
}

.sidebar__body--search:active {
  scale: 0.97;
}

.sidebar__footar {
  margin-top: auto;
  margin-bottom: 20px;
  color: #1ae2e2;
  font-weight: bold;
}
</style>
