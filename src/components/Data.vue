<template>
  <div>
    <p>you should ONLY be able to get to this page if you're logged in</p>
    {{ this.$store.state.uid }}
    <hr />
    <button @click="queryMyData">My data</button>

    <div>
      <label>try to see someone elses data: </label>
      <button @click="querySomeoneElse">GO!</button>
      <p>result will go here</p>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

export default {
  data() {
    return {
      queryId: ""
    };
  },
  methods: {
    querySomeoneElse: function() {
      this.queryId = "8675309";
      console.log("attempt to query somebody else");
      firebase
        .firestore()
        .collection("users")
        .doc(this.queryId)
        .get()
        .then(doc => {
          console.log(doc.data());
        })
        .catch(err => {
          console.log(err);
        });
    },
    queryMyData: function() {
      console.log("get my data");
      this.queryId = this.$store.state.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(this.queryId)
        .get()
        .then(doc => {
          console.log(doc.data());
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // created () {
  //   console.log(this.$store.state.uid)
  //   firebase().firestore().collection("users").doc(this.$store.state.uid).get()
  //   .then(doc => console.log(doc))
  //   .catch((err) => {console.log(err)})
  // }
};
</script>

<style lang="scss" scoped></style>
