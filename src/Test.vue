<template>
  <div id="test">

    <div v-bind:style="styleObject">

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      styleObject: {
        background: 'red',
        fontSize: '13px'
      }
    }
  },
  components : {

  },
  methods : {

  },
  computed: {
          lettersInMessage: function(){
              return this.textUserMessage.length
          }
      }
}


// import  from './.vue'     
// import  from './.vue'           
// import  from './.vue'
// import  from './.vue'

</script>

<style lang="scss">
    div .open {
      width: 260px;
      height: 200px;
      border: 1px solid orangered;
    }
    div .close {
      width: 90px;
      height: 100px;
      border: 1px solid orangered;
    }

    div .open textarea {
      width:80% ;
      height:90% ;
    }

    div .close textarea {
      display: none;
    }

    button {
        border: 2px solid orangered;
        margin: 5px;
        width: 55px;
        height: 25px;
    }
</style>


	


