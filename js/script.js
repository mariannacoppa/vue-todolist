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
            if (this.text != '' && this.text != null) {
                let object = {
                    text: this.text,
                    done: false
                }
                this.tasks.push(object);
                this.text = null;
            }
            else {
                alert('Non hai digitato nessuna task da inserire');
            }
        },
        changeStatus(index) {
            // if (this.tasks[index].done == true) {
            //     this.tasks[index].done = false;
            // }
            // else [
            //     this.tasks[index].done = true;
            // ]
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app');