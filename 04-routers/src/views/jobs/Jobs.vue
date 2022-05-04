<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <!-- <router-link :to="`/jobs/${job.id}`"> -->
    <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {
          title: "Ninja UI Designer",
          id: 1,
        },
        {
          details: "Lorem ...",
          title: "Ninja Front-end Developer",
          id: 2,
          details: "Lorem ...",
        },
        {
          title: "Ninja Back-end Developer",

          id: 3,
          details: "Lorem ...",
        },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
}

.job h2:hover {
  background: #fff;
}

.job a {
  text-decoration: none;
}

</style>