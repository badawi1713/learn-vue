<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.title">
      <h3><router-link :to="{name: 'Post', params: {id: post.id, content: post.body}}" >
          {{ post.title }}
      </router-link></h3>
      <p>{{post.body.substring(0,20)+'...'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ['posts'],
  setup(props) {
   
    const {posts} = props

    return {
        posts
    };
  },
};
</script>

<style>
</style>