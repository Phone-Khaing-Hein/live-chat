<template>
    <div class="welcome container">
       <div v-if="showLoginFrom">
            <Login @enterChatRoom="enterChatRoom"></Login>
            <p>Are you a new member? <span @click="showLoginFrom=!showLoginFrom">Create an account</span></p>
       </div>
       <div v-else>
            <SignUp @enterChatRoom="enterChatRoom"></SignUp>
            <p>Already have an account? <span @click="showLoginFrom=!showLoginFrom">Login Here</span></p>
       </div>
    </div>
</template>
<script>
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        SignUp,
        Login
    },

    setup() {
        let showLoginFrom = ref(true);
        let router = useRouter();

        let enterChatRoom = () => {
            router.push({ name: 'Chatroom' })
        }

        return {
            showLoginFrom,
            enterChatRoom
        }
    }
}
</script>
<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 20px;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>