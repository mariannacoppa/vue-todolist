const { createApp } = Vue;
createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'pulizie',
                    done: true
                },
                {
                    text: 'nuotare',
                    done: true
                },
                {
                    text: 'studiare',
                    done: false
                },
                {
                    text: 'leggere',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(index) {
            if (confirm('sicuro di voler eliminare il task?')) {
                this.tasks.splice(index, 1);
            }
        }
    }
}).mount('#app');