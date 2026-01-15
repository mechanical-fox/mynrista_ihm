


<template>

    <div class="banner">
        <div class="flex-line-end">
            <div class="nav-div-3">
                <button class="nav-button" @click="select('Login')"> Connexion </button>
                <button class="nav-button" @click="select('Registration')"> Inscription </button>
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
    <Registration v-if="selected=='Registration'" />
    <Login v-if="selected=='Login'" />

    <p v-if="error_message" class="error-message">
        <b>{{ error_title }}</b>
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {{ error_message }}
    </p>

</template>


<script setup>
        
    import {ref} from 'vue';
    import Welcome from './Welcome.vue';
    import About from './About.vue';
    import Registration from './Registration.vue';
    import Login from './Login.vue';

    const MESSAGE_TIME_MS = 8000;

    const items = ref(["Accueil", "A propos"]);
    const selected = ref("Accueil");
    const error_title = ref("");
    const error_message = ref("");

    /** A function to change what page is shown */
    function select(item){
        selected.value = item;
    }

    /** Clear the errors displayed in the page */
    function clearError(){
        error_title.value = "";
        error_message.value = "";
    }

    /** A function than given an array string of two arguments, will display the error.
     * The first argument must be the error_title. The second argument must be the error_message.*/
    function logError(args){

        if(args.length == undefined || args.length != 2)
            console.warn("Function logError uncorrectly called");
        else{
            error_title.value = args[0];
            error_message.value = args[1];
            Util.startTimer("ErrorTimer");
        }

    }

    Util.createTimer("ErrorTimer",()=>clearError(), MESSAGE_TIME_MS);
    MessageUtil.listen("logError", (args)=>logError(args));


</script>


