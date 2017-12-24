<template>
<div>
    <h1>{{ title }}</h1>
 <joblist />
</div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
import joblist from "@/components/partials/jobs/joblist";
export default {
  data() {
    return {
      title: "İş Bul"
    };
  },
  components: {
    joblist
  }
};
</script>

<style>
ul.item li {
  float: left;
  width: 20%;
  height: 200px;
  border: solid 2px #ddd;
  padding: 20px;
  margin: 20px;
  list-style: none;
}
</style>