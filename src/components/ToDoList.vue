<template>
    <div class="todo-list">
        <todo-item
        v-for="todo in todos"
         :key="todo._id"
         :title="todo.title"
         :description="todo['description']"/>
        <todo-item
        :title="todoTitle" 
        :description="todoDescription" 
        />
        
    </div>
     
</template>
<script>
    import TodoItem from './TodoItem'
        export default {
                    components: {
                        TodoItem
                    },
                    props:{
                        todos: {
                            required: true,
                            type: Array
                        }
                    },
                    data() {
                        return {
                            todoTitle: 'Family Time',
                            todoDescription: 'Taking Children to the movie'
                        }
                    }
                }
                // Array, Object, String, Number, Boolean,Function
</script>

 <style scoped>
 .todo-list{
     flex:1;
 }
 </style>