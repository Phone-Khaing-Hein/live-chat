<template>
    <div class="container">
        <Navbar @signout="signout"></Navbar>
        <ChatWindow></ChatWindow>
        <NewChatForm></NewChatForm>
    </div>
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue';
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import { useRouter } from 'vue-router';

export default {
    components: {
    Navbar,
    NewChatForm,
    ChatWindow
},
    setup() {
        const router = useRouter();
        const signout = () => {
           router.push({name: 'Welcome'})
        }
        return {
            signout
        }
    }
}
</script>
<style>
    
</style>