const { createApp } = Vue;
createApp({
    data() {
        return {
            text: null,
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
            if (confirm('Sicuro di voler eliminare il task?')) {
                this.tasks.splice(index, 1);
            }
        },
        addTask() {
            let object = {
                text: this.text,
                done: false
            }
            this.tasks.push(object);
            this.text = null;
        }
    }
}).mount('#app');