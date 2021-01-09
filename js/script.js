Vue.component('app-left-side', {
    template: `
    <div class="left-side">
            <h1>Список дел</h1>
            <h4>Добавляете и редактируйте списки дел</h4>
            <slot></slot>
            <button class="add-button" @click="$emit('add')">Добавить
                дело
            </button>
    </div>
    `
})

Vue.component('app-todo-list', {
    props: ['id', 'item'],
    template: `
    <div class="todo-item">
        <span class="todo-count">{{id + 1}}.</span>
        <div class="todo-label">{{item}}</div>
        <div class="buttons-wrap">
            <button class="change-button" @click="$emit('change')">Изменить</button>
            <button class="remove-button" @click="$emit('remove')">Удалить</button>
        </div>
    </div>`,
});

Vue.component('app-right-side', {
    props: ['value'],
    template: `
    <div class="right-side">
        <div class="input-block">
            <h2>Что нужно сделать?</h2>
            <input type="text" placeholder="Побегать вечером" :value="value" @input="$emit('input', $event.target.value)" @keyup.enter="$emit('save')">
            <button class="save-button" @click="$emit('save')">СОХРАНИТЬ</button>
        </div>
    </div>`
})

new Vue({
    el: "#todo-wrap",
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
        // Save button
        saveButton() {
            if (this.isEdit == false) {
                this.addTodo();
            } else {
                this.editTodo();
            }
        },

        // Todo add
        addTodo() {
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
            this.inputValue = '';
            this.isOpen = false;
        },

        // remove todo list
        removeTodo(index) {
            this.todoList.splice(index, 1);
            if (this.isOpen) {
                this.inputValue = '';
                this.isOpen = false;
            }
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