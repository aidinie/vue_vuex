<template>
  <div class="hello">
    <p>{{count}}</p>
    <button @click='increment'>mutations加</button>
    <button @click='decrement'>mutations减</button>
    <button @click='incrementDely'>actions加</button>
    <button @click='decrementDely'>actions减</button>
    <Dropdown></Dropdown>
    <div>
      <el-button type='text' @click='open'>弹出dialog</el-button>
    </div>
    <collapse></collapse>
    <step></step>
    <tab></tab>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Collapse from '@/components/Collapse'
  import Step from '@/components/Step'
  import Tab from '@/components/Tab'
  import Dropdown from '@/components/Dropdown'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed : mapState(['count'])
  ,
  methods : {
    ...mapMutations(['increment','decrement']),
    ...mapActions(['incrementDely','decrementDely']),
    open(){
      this.$alert('这是dialog内容', 'dialog标题', {
        //type: 'success',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        //center: 'true',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  },
  components:{
    Collapse,
    Step,
    Tab,
    Dropdown
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
