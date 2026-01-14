
<template>

    <div class="registration-div">
        <p class="registration-title">Créer un compte</p>

        <div class="flex-line">
            <div class="flex-column">
                <p class="registration-text-input"> Pseudo </p>
                <input class="registration-input"/>
                <p class="registration-text-input"> Email </p>
                <input class="registration-input"/>
            </div>
            <div class="flex-column">
                <p class="registration-text-input"> Mot de Passe </p>
                <input class="registration-input"/>
                <p class="registration-text-input"> Confirmation Mot de Passe </p>
                <input class="registration-input"/>
            </div>
        </div>
        
        
        <button class="registration-button"> Inscription </button>

        
       

    </div>

</template>



<script setup>
        
    import {ref} from 'vue';

    const items = ref(["Accueil", "A propos"]);
    const selected = ref("Accueil");

    /** A function to change what page is shown */
    function select(item){
        selected.value = item;
    }
    
</script>