<template>
  <div class="login">
    <div class="login-left">
      <button class="login__button">Sign in</button>
      <span class="login__sign-in-text"
        >Sign in with a google or <br />
        Facebook account</span
      >
      <img src="../assets/e_logo.jpg" alt="Company logo" class="login__logo" />
    </div>

    <div class="login__left-icons login_icons">
      <img
        src="../assets/loginIcons/delete.svg"
        alt="Delete"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/run.svg"
        alt="Running"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/cleaning.svg"
        alt="Cleaning"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/fitness.svg"
        alt="Fitness"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/restaurant.svg"
        alt="Eat"
        class="login__icon"
      />
    </div>
    <div class="login__right-icons login_icons">
      <img
        src="../assets/loginIcons/build.svg"
        alt="Build"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/medical.svg"
        alt="Medical"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/shopping.svg"
        alt="Shopping"
        class="login__icon"
      />
      <img
        src="../assets/loginIcons/sports.svg"
        alt="Sport"
        class="login__icon"
      />
      <img src="../assets/loginIcons/tv.svg" alt="TV" class="login__icon" />
    </div>

    <div class="login-right">
      <span class="login__app-name">Ehsan To Do</span>
      <img
        src="../assets/login_image.jpg"
        alt="Login Image"
        class="login__image"
      />
    </div>
  </div>
</template>

<script setup>
// import Delete from "../assets/loginIcons/delete.svg";
</script>
<style>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.login-right {
  display: flex;
  flex-direction: column;
  align-items: start;
  /* border: 1px solid #b3b3b3; */
  /* border-radius: 7px; */
  border-left: 3px solid #727272;
  height: 400px;
  width: 350px;
  flex-shrink: 0;
  padding-left: 20px;
  z-index: 2;
  background-color: #fff;
}

.login-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  flex-shrink: 0;
  /* border: 1px solid #b3b3b3; */
  /* border-radius: 7px; */
  border-right: 3px solid #727272;
  height: 400px;
  width: 350px;
  z-index: 2;
  background-color: #fff;
}
.login__app-name {
  font-size: 40px;
  font-family: inherit;
  font-weight: 200;
  color: #363636;
}

.login__image {
  width: 300px;
  margin-top: 20px;
  pointer-events: none;
}

.login__button {
  background-color: #436af2;
  color: hsl(0, 0%, 100%);
  padding: 4px 100px;
  padding-top: 6px;
  border: 0;
  cursor: pointer;
  margin-top: 20px;
  white-space: nowrap;
}

.login__button:hover {
  background-color: #5576eb;
  color: #f0f0f0;
}
.login__button:focus {
  scale: 1.05;
}

.login__sign-in-text {
  font-size: 20px;
  text-align: end;
  color: #7a7a7a;
  margin-top: 10px;
  font-weight: 200;
}

.login__logo {
  width: 55px;
  border-radius: 10px;
  margin-bottom: 20px;
  pointer-events: none;
}

.login_icons {
  width: 40px;
  height: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.login__left-icons {
  margin-left: -55px;
  z-index: 1;
}

.login__right-icons {
  margin-right: -55px;
  color: #7a7a7a;
}

.login__icon {
  background-color: #ebebeb;
  padding: 2px;
  border-radius: 5px;
  pointer-events: none;
}

.login__left-icons .login__icon {
  transform: rotate(20deg);
}

.login__right-icons .login__icon {
  transform: rotate(-20deg);
}
</style>
