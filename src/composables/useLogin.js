import { ref } from "vue";
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

let error = ref(null);
let login = async (email, password) => {
    try {
        let response = await signInWithEmailAndPassword(auth, email, password);
        if (!response) {
            throw new Error('Could not Login');
        }
        return response;
    } catch (err) {
        error.value = err.message;
    }
}

let useLogin = () => {
    return { error, login }
}

export default useLogin;