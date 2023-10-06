<template>
    <div class="chat-window">
        <div class="messages" ref="messageBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="createdAt">{{ message.createdAt }}</span>
                <span class="name">{{ message.sender }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, onUpdated, ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import {formatDistanceToNow} from 'date-fns';

export default {
    setup() {
        const messages = ref([]);
        const messagesCollection = collection(db, 'messages');
        const q = query(messagesCollection, orderBy('createdAt'));
        const messageBox = ref(null);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const result = [];
            snapshot.docs.map((doc) => {
                if(doc.data().createdAt){
                   result.push({ ...doc.data(), id: doc.id });
                }
            });
            messages.value = result;
        });
        const formattedMessages = computed(() => {
            return messages.value.map((message) => {
                return {
                    ...message,
                    createdAt: formatDistanceToNow(message.createdAt.toDate(), { addSuffix: true })
                }
            })
        })
        onUpdated(() => {
            messageBox.value.scrollTop = messageBox.value.scrollHeight;
        })
        return {
            messages,
            formattedMessages,
            messageBox
        }
    }
}
</script>
<style>
.chat-window {
    background-color: #fafafa;
    padding: 30px 20px;
}

.single {
    margin: 18px 0;
}

.createdAt {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>