


<template>
    
    <div class="div-1">
        <p class="text"> Le compteur vaut {{counter}} <br/> </p>
        <p class="text"> Compteur Supérieur à 5:</p>
        
        <!-- Exemple v-if -->
        <p class="text" v-if="mostThan5"> &nbsp;&nbsp;&nbsp;&nbsp; Oui <br/></p>
        <p class="text" v-else> &nbsp;&nbsp;&nbsp;&nbsp; Non <br/></p>
        
        <button class="button-1" @click="increment()"> Clic </button>
        <p class="text"> Liste:</p>
        
        <!-- Exemple v-for -->
        <div v-for="item in list">
            <p class="text"> &nbsp;&nbsp;&nbsp;&nbsp;   {{ item }}</p>
        </div>
        </div>
</template>


<script setup>
        
    import {ref} from 'vue';
        
    const mostThan5 = ref(false);
    const counter = ref(0);
    const list = ref([]);
    const fullList = ["Moine", "Rodeur", "Forgeron", "Soigneur"];
    
    function increment(){
        
        if(counter.value < fullList.length)
            list.value.push(fullList[counter.value]);
        
        counter.value++;
        
        if(counter.value > 5)
            mostThan5.value = true;
    }
    
</script>

