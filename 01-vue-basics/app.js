// creating vue app

const app = Vue.createApp({
    // template, setup data, functions
    template: '<p>{{title}} - {{author}}, {{age}}</p>',
    data() {
        return {
            title: 'Life is Subarashii',
            author: 'Dzaky Badawi',
            age: 25
        }
    }
})

// Method mount
app.mount('#app')