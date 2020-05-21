<template>
  <div>
    <h1>color test</h1>
    <label>email</label>
    <input v-model="username" />
    <br />
    <label>password</label>
    <input v-model="password" />
    <br />
    <button v-if="username && password" @click="accountRecovery" class="blech">
      tis will be very important button
    </button>
    <button class="pmr-btn" @click="loginUser">Submit</button>
    <button @click="beNathan">Be Nathan</button>
    <button @click="accountRecovery">forget password? click</button>
    <hr />
    <p>
      yo - you should double check that creating a user doesn't cause any issues
    </p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginUser: function() {
      console.log("login User : ", this.username, this.password);
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then(response => {
              console.log("response: ", response);
              this.$store.commit("SET_UID", response.user.uid);
              return response;
            });
        })
        .catch(err => console.log("error: ", err));
    },
    beNathan: function() {
      this.username = "nathanraysheryak@gmail.com";
      this.password = "test123";
      this.loginUser();
    },
    accountRecovery: function() {
      console.log("clicked");
      if (this.username === "") {
        alert("gotta have an email to recover");
      } else {
        firebase
          .auth()
          .sendPasswordResetEmail(this.username)
          .then(() => alert("cool, check your email"));
      }
    }
  }
};
</script>

<style scoped lang="scss">
.blech {
  color: yellowgreen;
}
h1 {
  background-color: orange;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
