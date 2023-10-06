<template>
    <form>
        <textarea v-model="message" @keypress.enter="handleSubmit"
            placeholder="Text message and hit enter to send"></textarea>
    </form>
</template>
<script>
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import { ref } from 'vue';
import useCollection from '@/composables/useCollection';

export default {
    setup() {
        const message = ref('');
        const {user} = getUser();
        const {error, addDocument } = useCollection('messages');

        const handleSubmit = async () => {
            let chat = {
                message: message.value,
                sender: user.value.displayName,
                createdAt: timestamp
            }
            await addDocument(chat);
            message.value = '';
        }
        return {
            message,
            handleSubmit
        }
    }

}
</script>
<style>
form {
    margin: 10px
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    border: 0;
}
</style>