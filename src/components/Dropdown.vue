<template>
    <div>
        <el-dropdown @command="handleCommand" trigger='click'>
                <span class="el-dropdown-link">
                {{selected || '请选择'}}<i class="el-icon-arrow-down"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                    <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item command="双皮奶" disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    </div>
              
</template>
<script>
export default{
    data(){
        return{
            selected : ''
        }
    },
    methods : {
        handleCommand(command){
            //alert('selected' + command);
            this.selected = command;
        }
    }
}

</script>
<style scoped>
    div{
        margin-top: 10px;
        margin-bottom: 10px;
    }

</style>