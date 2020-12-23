
new Vue({
    el: ".todo-wrap",
    data: {
        todoList: [{
            todo: 'Сделать адаптивный дизайн'
        }],
        inputValue: '',
        inputVisible: false,
        changeBtnWasClicked: false,
        addBtnWasClicked: false,
        todoNum: 0
    },

    methods: {
        addChangeTodo() {
            if (this.addBtnWasClicked == true) {
                let todoCount = this.todoList.length + 1;
                if (this.inputValue.trim()) {
                    this.todoList.push({
                        todo: this.inputValue,
                    });
                    this.inputValue = '';
                }
                this.inputVisible = false
                this.addBtnWasClicked = false
            }
            if (this.changeBtnWasClicked) {
                this.todoList[this.todoNum].todo = this.inputValue;
                this.inputVisible = false;
                this.inputValue = ''
                this.changeBtnWasClicked = false
            }
        },
        changeBtn(e) {
            let todoCount = e - 1
            this.changeBtnWasClicked = true;
            this.inputVisible = true;
            this.inputValue = this.todoList[todoCount].todo;
            this.todoNum = todoCount;
        },

        removeTodo(e) {
            let todoCount = e - 1;
            this.todoList.splice(todoCount, 1);
            console.log('delete btn was clicked');
        }
    }
})