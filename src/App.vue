<template>
  <div id="app">
    <div class="todo-wrapper">
        <div class="todo-container"> 
            
            <todo-list :todos="todos"/>
            <div class="todo-create-btn-container">
              <div  
                v-on:click="isModalOpen= true" 
                
                class="app-button">Create</div>
            </div>

        </div>
      </div>   
      <Modal 
        :isOpen="isModalOpen"
        @modalClosed="isModalOpen= false"
        />
  </div>
</template>

<script>
import TodoList from './components/ToDoList';
import Modal from './components/Modal';

// import playground from './components/playground'

export default {
name:'app',
components: {
  TodoList,
  Modal
},

data() {
  return {
    isModalOpen:false,
    todos: [
      {
        _id: '1',
        title:'Walk the dog',
        description: 'Go to the forest near the zoo'
      },
      {
        _id: '2',
        title:'Buy a bread',
        description: 'Whole grain bread would be good'
      },
      {
        _id: '3',
        title:'Learning Programming',
        description: 'Tomorrow would be best!'
      },
    ]
  }
},
  created(){
  // playground();
},
methods: {
  // openModal (){
  //   // alert ('Open Moodal')
  //   this.isModalOpen = !this.isModalOpen
  // },
  // closeModal(){
  //   this.isModalOpen=false;
  // }
}
  
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.app-button {
  font-size: 20px;
  padding:10px;
  border-radius:5px;
  background-color:#795899;
  color:white;
  font-weight:bold;
  &:hover{
    cursor:pointer;
  }
  
}
.todo {
    &-wrapper{
  
      display:flex;
      justify-content:center;
      flex-direction:column;
      width:100%;
    }
    &-create-btn-container {
      margin:10px;
    }
    &-container {
      margin: 0 auto;
      width: 400px;
      min-height:400px;
      background-color:#ededed;
      border-radius:5px;
      display:flex;
      flex-direction:column;

    }
    
}

</style>
