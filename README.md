# Learn Vue from Scratch

## 01. Vue Basics (3/21/2022)

- Create git repo and log for my learning
- Add my first content which is learn vue from basics
- Build Vue3 withoud buildtools, because I'm using with CDN from vue documentation
- <https://unpkg.com/vue@3.0.2> Vue3 CDN
- Create vue app, const app = Vue.createApp({template: '...', data(){return ... }})
- Mount method to preview, app.mount('#app')
- Template is for showing the html code or the UI
- Show the data with {{ data }}
- Add methods and click events
  - for click method, we can use <button v-on:click=""...
  - you can replace v-on: with @, @click
  - to create method, use methods: {functionName(){}, .... }
- Conditional rendering (v-if)
  - if (v-if), example: `<div v-if="condition">...</div>`
  - else (v-else), example: `<div v-else>...</div>`
  - show (only meet the require condition), example: `<div v-show="condition">...</div>`
- Mouse event
  - mouseleave
  - mouseenter
  - mousemove
  - dblclick
- For in vue, we can use v-for in list `<li v-for="item in list">{item.name}</li>`
- Attribute binding, to get dynamic value from a data component to used in element attribute, we can use v-bind:ATTRIBUTE or just :ATTRIBUTE, for example using in :src, :alt, :value, :class, :title, etc...
- Notes: @ for v-on, and : for v-bind
- Computed properties are for listening to change on the data

## 2. Vue CLI (3/22/2022)

- To create vue app with CLI: `vue create [project_name]`
- `cd project_directory` and run it with `npm run serve`
- use `<template>` to create component and export it like this `export default { name: 'HelloWorld', props: {msg: String}}` to import in script tag, `import Component from './components/..'` and inside the export default write, `export default { ..., components: {Component} }`
- Template refs allow to store a reference to adompt elements inside a variable, example: `<input type='text' ref='name/>` to access the ref, we can use `this.$refs.(ref_name)`
