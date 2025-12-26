


<template>
    

	<div class="div-1">
		<p class="text"> Le compteur vaut {{counter}}</p>
		<br/>
		<p class="text"> Compteur Supérieur à 5:</p>
		<p class="text" v-if="mostThan5"> &nbsp;&nbsp;&nbsp;&nbsp; Oui</p>
		<p class="text" v-else> &nbsp;&nbsp;&nbsp;&nbsp; Non</p>
		<br/>
		<button class="button-1" @click="increment()"> Clic </button>
	</div>

</template>


<script setup>

	import {ref} from 'vue';

	const mostThan5 = ref(false);
	const counter = ref(0);

	function increment(){
		counter.value++;

		if(counter.value > 5)
			mostThan5.value = true;
	}

</script>

