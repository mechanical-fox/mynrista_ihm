
<template>

    <div class="registration-div">

        <p class="registration-title">Connexion</p>

        <div class="flex-line">
            <div class="flex-column">
                <p class="registration-text-input"> Email </p>
                <input id="input-email" class="registration-input"/>
                <p class="registration-text-input"> Mot de Passe </p>
                <input id="input-password" class="registration-input" type="password"/>
            </div>
        </div>
        
        <button class="registration-button" @click="connect()"> Connexion </button>
       
        <p v-if=" error_message != ''" v-html="error_message" class="registration-user-message registration-red"></p>
        
    </div>

</template>



<script setup>

    import {ref} from 'vue';
    import {API_Util} from '../script/API_Util';
    import {EErrorCode} from '../script/EErrorCode';
    import {MessageUtil} from '../script/MessageUtil';

    const error_message = ref("");

    /** Call the server to retrieve a token with the informations provided. And after return to the welcome page, with a status connected.
     * The email, and password are retrieved from the input field. If the authentification is incorrect, or if the server is down, an error message 
     * is displayed to the client. */
    async function connect(){
        let email = document.getElementById("input-email").value;
        let password = document.getElementById("input-password").value;
        let body = {email : email, password : password};

        let answer = await API_Util.post("/auth", body);

        if(!answer.hasFailed)
            MessageUtil.call("connect", [answer.data.pseudo, answer.data.token]);
        else if( answer.errorCode == EErrorCode.ERROR_CONNECTION)
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
        else if(answer.status == 401 || answer.status == 403)
            error_message.value = "Email, ou mot de passe incorrect";
        else
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);

    }



</script>

