//  表单列表

<style scoped>

</style>

<template>
    <a class="weui_cell " href="javascript:;">
        <div class="weui_cell_bd weui_cell_primary">{{title}}</div>
        <div class="cell-name-wrap"">
        	<slot></slot>
        </div>
    </a>
</template>

<script>

export default {
	props:['title'],
	data () {
	    return {
	    	
	    }
	}
}
</script>


