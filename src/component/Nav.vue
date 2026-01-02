


<template>

    <div class="banner">
        <div class="flex-line-end">
            <div class="nav-div-3">
                <button class="nav-button"> Connexion </button>
                <button class="nav-button"> Inscription </button>
            </div>
        </div>
        <div class="flex-line-align-top">
            <div class="nav-div-1">
                <p class="title">Mynrista</p>
            </div>
            <div class="nav-div-2">
                <div  class="flex-line">
                    <div v-for="item in items" class="div-for">
                        <p v-if="selected == item" class="item-activated">{{ item }}</p>
                        <p v-else class="item-desactivated" @click="select(item)" >{{ item }}</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    

    <Welcome v-if="selected=='Accueil'" />
    <About v-if="selected=='A propos'" />

</template>


<script setup>
        
    import {ref} from 'vue';
    import Welcome from './Welcome.vue';
    import About from './About.vue';

    const items = ref(["Accueil", "A propos"]);
    const selected = ref("Accueil");

    /** A function to change what page is shown */
    function select(item){
        selected.value = item;
    }
    
</script>


