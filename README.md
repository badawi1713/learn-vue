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
