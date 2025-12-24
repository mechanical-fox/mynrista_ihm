


<template>
	<link rel="stylesheet" href="css/style.css" />
    <p class="text"> {{message}}</p>

</template>


<script setup>

	import {ref} from 'vue';

	const message = ref("Hello world");

</script>

