


<template>
    

    <div class="nav-div-1">
        <p class="title">Mynrista</p>
    </div>
    
    <div class="nav-div-2">
        <div  class="flex-line">
            <div v-for="item in items" class="div-for">
                <p v-if="activated == item || selected == item" class="item-activated"
                @click="activate(item)" @mouseover="select(item)" @mouseout="deselect(item)">
                    {{ item }}
                </p>
                <p v-else class="item-desactivated" 
                @click="activate(item)" @mouseover="select(item)" @mouseout="deselect(item)">
                    {{ item }}
                </p>
            </div>
        </div>
    </div>

    <Welcome v-if="activated=='Accueil'" />

</template>


<script setup>
        
    import {ref} from 'vue';
    import Welcome from './Welcome.vue';

    const items = ref(["Accueil", "Jeux", "Scores", "A propos"]);
    const activated = ref("Accueil");
    const selected = ref("");

    function select(item){
        selected.value = item;
    }

    function deselect(item){
        selected.value = "";
    }

    function activate(item){
        activated.value = item;
    }
    
</script>


