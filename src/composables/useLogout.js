import { ref } from "vue";
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';

let error = ref(null);
let logout = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        error.value = err.message;
    }
}

let useLogout = () => {
    return { error, logout }
}

export default useLogout;