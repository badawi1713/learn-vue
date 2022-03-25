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
- To styling component we can use scoped attribute in style tag for local styling `<style scoped>`, and not used it if you want to create global styles
- To create props for components we can use `props: {msg: String}` in export default { ... } or `props: ['props','props2',...]` and for components that accepts the props, we can passing it with `<Component props="value" />` or if the props is accepting dynamic value we can bind it with `<Component :props="dynamic_value" />`
- Emit custom event to listen parent event, in child component create method with `this.$emit('event_name')` and on parent component add emit props like `<Component @event_name="handler" />`
- Click event modifier, to restricted event `@click.[modifier]`
- Slot is useful for passing custom templates into components, create slot in child component, `<slot></slot>` and on it's parent `<Component><h1>{{content}}</h1></Component>` it will pass the component content or children, you can use custom slot with `<template>`, on it's parent component use `<Component><template v-slot:slot_name><div>...</div></template></Component>` on the component itself, add name attribute to the slot `<slot name="slot_name"></slot>`

## 3. Add To-Do-List Project as Exercise (3/23/2022)

- Create simple components and logic for to-do-list app
- Learn to CRUD with vanilla JavaScript (Add new task data, checked the task to update the task, delete task, and view list of data)

## 4. Add Timer Reaction Project as Exercise (3/24/2022)

- Create simple components and logic for timer reaction app
- Learn how to use interval, life cycle hooks, and click event
- life cycle:
  - beforeCreate: this fires before component even is fully created
  - created: the component is created, but not yet mounted in DOM
  - beforeMount
  - mounted: We can access the data, template (popular to use fetch)
  - beforeUpdated: when the data updated and changes (like click button), it happens after the data change but before re-rendered to the DOM
  - updated: show the change after any changes/update happens in component
  - beforeUnmount: before remove from DOM
  - unmounted: component cleanup
  - link to life-cycle-hooks: <https://vuejs.org/guide/essentials/application.html#lifecycle-hooks>
  - emitting event with value `this.$emit('event_name', value)`

## 5. Form (2-way data binding

- two data binding, to modify the data (state) and we can change the data, with bind it with v-model:
  - `<input v-model="data_that_what_you_want_to_change" />`
  - `<select v-model="role">`
- listening to keyboard press `@keyup`
- to prevent form submit from reloading, we can use handler @submit.prevent in form tag, `<form @submit.prevent="handler">...</form>`
