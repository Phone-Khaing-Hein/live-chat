<template>
    <h2>SignUp</h2>
    <form @submit.prevent="singUp">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button type="submit">SignUp</button>
    </form>
</template>
<script>
import { ref } from 'vue';
import useSignUp from '../composables/useSignup';

export default {

    setup(props, { emit }) {
        let name = ref('');
        let email = ref('');
        let password = ref('');
        const { error, createAccount } = useSignUp();

        let singUp = async () => {
            const response = await createAccount(email.value, password.value, name.value);
            if (response) {
                emit('enterChatRoom')
            }
        }

        return {
            name,
            email,
            password,
            singUp,
            error
        }
    }
}
</script>
<style>
    
</style>