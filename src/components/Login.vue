<template>
    <h2>Login</h2>
    <form @submit.prevent="signin">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button type="submit">Login</button>
    </form>
</template>
<script>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';

export default {
    setup(props, { emit }) {
        let email = ref('');
        let password = ref('');
        const { error, login } = useLogin();

        let signin = async () => {
            const response = await login(email.value, password.value);
            if (response) {
                emit('enterChatRoom')
            }
        }

        return {
            email,
            password,
            signin,
            error
        }
    }
}
</script>
<style>
    
</style>