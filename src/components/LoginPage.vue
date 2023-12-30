<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="login-left">
        <span class="login__app-name">Ehsan To Do</span>

        <form action="" class="login_form" @submit.prevent>
          <span class="sign-in-button input-width">
            <input
              type="text"
              v-model="userName"
              placeholder="UserName"
              class="login_input"
            />
          </span>
          <span class="sign-in-button input-width">
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="login_input"
            />
          </span>
          <button @click="loginSubmit()" class="sign-in-button button-width">
            Log in
          </button>
        </form>

        <span class="login__sign-in-text"
          >Sign in with a google or <br />Facebook account
        </span>
        <!-- <div class="login__buttons">
          <button class="sign-in-button" role="button">
            <img
              src="../assets/loginIcons/google.svg"
              alt="G"
              class="button-icons"
            />
            Sign in
          </button>
          <button class="sign-in-button" role="button">
            <img
              src="../assets/loginIcons/facebook.svg"
              alt="FB"
              class="button-icons"
            />
            Sign in
          </button>
        </div> -->
        <img
          src="../assets/e_logo.jpg"
          alt="Company logo"
          class="login__logo"
        />
      </div>

      <!-- <div class="login__left-icons login_icons">
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
          src="../assets/loginIcons/medical.svg"
          alt="Medical"
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
          src="../assets/loginIcons/fitness.svg"
          alt="Fitness"
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
      </div> -->

      <div class="login-right">
        <img
          src="../assets/login-image.jpg"
          alt="Login Image"
          class="login__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = {
  userName: "Ehsanullah",
  password: "12345",
};

const userName = ref("");
const password = ref("");

function loginSubmit() {
  if (userName.value === user.userName && password.value === user.password) {
    console.log("done");
  }
}
</script>
<style>
.login-wrapper {
  white-space: nowrap;
  width: 100%;
  height: 100vh;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    60deg,
    hsl(328deg 100% 85%) 0%,
    hsl(320deg 70% 84%) 14%,
    hsl(303deg 43% 83%) 26%,
    hsl(271deg 41% 84%) 37%,
    hsl(232deg 47% 86%) 48%,
    hsl(210deg 64% 83%) 57%,
    hsl(200deg 77% 81%) 65%,
    hsl(194deg 87% 78%) 73%,
    hsl(190deg 94% 74%) 83%,
    hsl(187deg 100% 69%) 100%
  );
}

.login {
  width: 900px;
  height: 600px;
  max-height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
}

.login-right {
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* border: 1px solid #b3b3b3; */
  /* border-radius: 7px; */
  /* border-left: 3px solid #727272; */
  height: 100%;
  width: 60%;
  flex-shrink: 0;
  z-index: 2;
}

.login-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  flex-shrink: 0;
  /* border: 1px solid #b3b3b3; */
  /* border-radius: 7px; */
  /* border-right: 3px solid #727272; */
  height: 100%;
  width: 40%;
  z-index: 2;
  background-color: #fff;
}
.login__app-name {
  font-size: 40px;
  font-family: inherit;
  font-weight: 300;
  color: #363636;
  letter-spacing: 1px;
  margin-top: 40px;
  margin-bottom: auto;
}

.login_form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
}

.login__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

/* .login__button {
  background-color: hsl(187deg 100% 69%);
  color: hsl(0, 0%, 100%);
  padding: 4px 100px;
  padding-top: 6px;
  border: 0;
  cursor: pointer;
  margin-top: 20px;
  white-space: nowrap;
  transition: all 0.2s;
} */

/* .login__button:hover {
  background-color: hsl(187, 80%, 57%);
  color: #f0f0f0;
} */

/* .login__button:focus {
  scale: 1.02;
} */

.login__sign-in-text {
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  color: #7a7a7a;
  margin-top: 10px;
  font-weight: 200;
}

.login__logo {
  width: 55px;
  border-radius: 7px;
  margin-top: auto;
  margin-bottom: 30px;
  pointer-events: none;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

/* .login_icons {
  width: 40px;
  height: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
} */

/* .login__left-icons {
  margin-left: -105px;
  z-index: 1;
}

.login__right-icons {
  margin-right: -105px;
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
} */

/* .login__buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
} */

/* CSS of Inputs and Button
and the light arrount them starts here*/
.sign-in-button {
  padding: 0.4em 0em;
  width: 80%;
  max-width: 300px;
  border: none;
  outline: none;
  color: #7a7a7a;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 5px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.sign-in-button:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  animation: glowing-sign-in-button 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 5px;
}

.sign-in-button:focus::before {
  animation-duration: 7s;
}

@keyframes glowing-sign-in-button {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.sign-in-button:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  left: 0;
  top: 0;
  border-radius: 5px;
}

/* CSS of Inputs and Button
and the light arrount them ends here*/

.input-width {
  padding: 0;
}

.input-width input {
  border-radius: 5px;
  border: 0;
  outline: none;
  padding: 10px 10px;
  color: #363636;
  width: 100%;
  height: 100%;
}

/* media for medium and small screens */
@media (max-width: 950px) {
  .login-wrapper {
    background: white;
  }

  .login {
    /* flex-direction: column-reverse; */
    /* justify-content: space-evenly; */
    overflow: unset;
    box-shadow: none;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    align-items: stretch;
    justify-content: stretch;
    overflow-y: scroll;
  }

  .login-right {
    display: none;
    /* align-items: center;
    border: none;
    height: auto;
    width: auto;
    flex-shrink: 0;
    padding-left: 0;
    z-index: 2;
    background-color: #fff; */
  }

  .login-left {
    /* align-items: center; */
    gap: 25px;
    width: 100%;
    flex-shrink: 0;
    border: none;
    padding-right: 0;
    z-index: 2;
    background-color: #fff;
    border-radius: 5px;
  }

  .login__app-name {
    margin-top: 40px;
  }

  /* .login__image {
    margin-top: 0;
  } */

  /* .login_icons {
    display: none;
  } */
}
</style>
