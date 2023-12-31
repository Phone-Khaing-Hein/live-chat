import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
    const error = ref(null);
    const addDocument = async (doc) => {
        try {
            await addDoc(collection(db, collectionName), doc);
        } catch (err) {
            console.log(err.message);
            error.value = "Could not send the message";
        }
    }
    return { error, addDocument };
}

export default useCollection