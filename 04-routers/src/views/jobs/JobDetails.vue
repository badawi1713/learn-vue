<template>
  <div v-if="loading">
    <h1>Loading ....</h1>
  </div>
  <div v-else>
    <div class="job">
      <p>Job ID : {{ id }}</p>
      <p>{{ job?.title || 'Data is Not Found!' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  props: ["id"],
  data() {
    return {
      loading: true,
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
      job: null,
    };
  },
  mounted() {
    setTimeout(() => {
      const findJobDetail = () => this.jobs.find((item) => item.id === +this.id);
      this.job = findJobDetail();
      this.loading = false;
    }, 3000);
  },
};
</script>

<style>
</style>