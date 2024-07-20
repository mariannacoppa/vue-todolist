const { createApp } = Vue;
createApp({
    data() {
        return {
            text: null,
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false,
                    edit: false
                },
                {
                    text: 'pulizie',
                    done: true,
                    edit: false
                },
                {
                    text: 'nuotare',
                    done: true,
                    edit: false
                },
                {
                    text: 'studiare',
                    done: false,
                    edit: false
                },
                {
                    text: 'leggere',
                    done: false,
                    edit: false
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
        editTask(index) {
            this.tasks[index].edit = !this.tasks[index].edit;
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