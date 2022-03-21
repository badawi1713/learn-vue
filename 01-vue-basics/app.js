// creating vue app

const app = Vue.createApp({
    // template, setup data, functions
    data() {
        return {
            title: 'Life is Subarashii',
            author: 'Dzaky Badawi',
            age: 25
        }
    },
    // create methods
    methods: {
        changeTitle(title){
            // access data from the component we can use, this
            this.title = title
        }
    }
})

// Method mount
app.mount('#app')