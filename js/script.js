
new Vue({
    el: ".todo-wrap",
    data: {
        todoList: [{
            todo: 'Сделать адаптивный дизайн'
        }],
        inputValue: '',
        isOpen: false,
        isEdit: false,
        todoNum: 0
    },

    methods: {
        saveButton() {
            if (this.isEdit == false) {
                this.addTodo();
            }
            else {
                this.editTodo();
            }
        },

        // Todo save
        addTodo() {
            let todoCount = this.todoList.length + 1;
            if (this.inputValue.trim()) {
                this.todoList.push({
                    todo: this.inputValue,
                });
                this.inputValue = '';
            }
            this.isOpen = false;
        },

        // Todo edit
        editTodo() {
            this.todoList[this.todoNum].todo = this.inputValue;
            this.inputValue = ''
            this.isOpen = false
        },

        // remove todo list
        removeTodo(index) {
            this.todoList.splice(index, 1);
        },

        // Edit todo list button
        todoEditBtn(index) {
            this.isOpen = true;
            this.isEdit = true;
            this.inputValue = this.todoList[index].todo;
            this.todoNum = index;
        },

        // Add todo list button
        todoAddBtn() {
            this.isOpen = true;
            this.isEdit = false
        }
    }
})