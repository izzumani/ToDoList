<template>
    <div class="modal" :class="{'is-active':isOpen}">
        <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <form class="app-form">
          <div class="form-control">
            <label class="label">Title</label>
            <input v-model="form.title" class="form-input" type="text"/>
          </div>
          <div class="form-control">
            <label class="label">Description</label>
            <input v-model="form.description" class="form-input" type="text"/>

          </div>
          <button @click="createTodo"  type="button" class ="app-button is-primary">Confirm</button>
        </form>
          
        </div>
      </div>
</template>
<script>
  export default {

      data(){
     return {
      //  isActive: false
      form: {
          title:'The title goes here',
          description:' The description goes here'
      }
     } 
    },

    props: {
      isOpen:{
      required:true,
      default:false,
      type: Boolean
    }

    },
    methods: {
      closeModal(){
        // this.isOpen=false;
        this.$emit('modalClosed')
      },
      createTodo() {
        console.log("Clicked to confirm or create");
      }
    }
      

    
    
  
  }
</script>
<style scoped lang="scss">
.is-primary {
background-color:green !important;  
}
.app-form {
  .label {
    display:block;
    font-size:18px;
    font-weight:bold;
  }
  .form-input {
    padding: 10px;
    font-size:17px;
  }
  .form-control{
    margin-bottom:10px;
  }
}
.close {
  color: #aaa;
  float:right;
  font-size:28px;
  font-weight:bold;
  line-height:8px;
  &:hover{
    cursor:pointer;
  }

}
.modal.is-active{
  display:block;
}
.modal {
  display:none;
  position:fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height:100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align:left;
}
</style>