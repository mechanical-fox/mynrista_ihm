

<template>
    
    <div v-if="!editingInProgress" class="publishing-div">
        <input v-model="titleInput" type="text" class="publishing-input"></input>
        <button class="publishing-button" @click="create()">Créer Page</button>
        <p class="basic-text"> <i>Liste des Visuals Novels à réaliser après</i></p>
    </div>

    <EditionScreen v-if="editingInProgress" :title="title"/>
    
</template>

<script setup>

    import EditionScreen from './EditionScreen.vue';
    import { MessageUtil } from '@/script/MessageUtil';
    import {ref} from 'vue';

    const editingInProgress = ref(false);
    const title = ref("");
    const titleInput = ref("");

    /** Redirect to the Edition Screen to create a new entry for a Visual Novel. The title for the visual novel
    * to create is retrieved from the publishing-input field. The title can't be changed after. */
    function create(){

        if(titleInput.value.length < 6)
            MessageUtil.call("logError", ["Entrée Invalide", "Pour créer une page, un titre d'au moins 6 caractères doit être renseigné."]);
        else{
            title.value = titleInput.value;
            editingInProgress.value = true;
        }
        
    }

</script>