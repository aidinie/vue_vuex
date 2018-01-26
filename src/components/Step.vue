<template>
<el-steps :active='2' align-center>
    <el-step title="步骤一" description='这是步骤一'></el-step>
    <el-step title="步骤二" description='这是步骤二'></el-step>
    <el-step title="步骤三" description='这是步骤三'></el-step>
</el-steps>

</template>
<script>

</script>
<style>
.el-step__head.is-finish {
    color: orange;
    border-color: orange;
}

</style>