

<template>
    
    <div v-if="!editingInProgress" class="publishing-div">
        <input id="publishing-input" v-model="titleInput" type="text" class="publishing-input"></input>
        <button id="publishing-button" class="publishing-button" @click="create()">Créer Page</button>

        <div class="publishing-novel-div">
            <div v-for="novel in novels">

                <div class="flex-line">
                    <div class="publishing-novel">
                        <img :src="novel.image_base64"class="publishing-novel-image"/>
                        <p class="publishing-novel-title">{{ novel.title }}</p>
                    </div>
                    <button class="publishing-edit-button" @click="edit(novel.title, novel.id)">
                        <img src="/images/edit.svg" class="publishing-edit-image">
                    </button>
                </div>
                
            </div>
        </div>
    </div>

    <EditionScreen v-if="editingInProgress" :title="title" :edit_id="edit_id" @submit="editingCompleted()"/>
</template>

<script setup>

    import EditionScreen from './EditionScreen.vue';
    import {API_Util} from '../script/API_Util';
    import { EErrorCode } from '../script/EErrorCode';
    import { MessageUtil } from '../script/MessageUtil';
    import {ref} from 'vue';

    const editingInProgress = ref(false);
    const title = ref("");
    const edit_id = ref(null);
    const titleInput = ref("");
    const novels = ref([]);

    refreshList();

    /** This function will refresh the list of the visual novels on screen. */
    async function refreshList(){
        let answer = await API_Util.get("/visual-novel");

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION)
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
        else if(answer.hasFailed)
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
        else
            novels.value = answer.data;
    }

    /** Redirect to the Edition Screen to edit the entry for a Visual Novel. The Visual Novel edited, will be the visual novel of id given in
     * parameter.*/
    async function edit(valueTitle, id){
        title.value = valueTitle;
        edit_id.value = id;
        editingInProgress.value = true;
    }


    /** Redirect to the Edition Screen to create a new entry for a Visual Novel. The title for the visual novel
    * to create is retrieved from the publishing-input field. The title can't be changed after. */
    async function create(){

        if(titleInput.value.length < 6)
            MessageUtil.call("logError", ["Entrée Invalide", "Pour créer une page, un titre d'au moins 6 caractères doit être renseigné."]);
        else{
            
            let valueTitle = titleInput.value.trim().toLowerCase();
            let alreadyExisting = false;

            for(let novel of novels.value){
                if(!alreadyExisting && novel.title.trim().toLowerCase() == valueTitle){
                    MessageUtil.call("logError", ["Page Existante", `Une page existe déjà pour le Visual Novel ${titleInput.value.trim()}`]);
                    alreadyExisting = true;
                }
            }

            if(!alreadyExisting){
                title.value = titleInput.value.trim();
                edit_id.value = null;
                editingInProgress.value = true;
            }
        }
    }
        
    /** A function called when the editing of a Visual Novel is finished, to return to the view outside of the editing mode. */
    async function editingCompleted(){
        await refreshList();
        titleInput.value = "";
        editingInProgress.value = false;
    }

</script>