<template>
    <nav v-if="user">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">logged in as {{ user.email }}</p>
        </div>
        <button @click="signout">Logout</button>
    </nav>
</template>
<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';

export default {
    setup(props, { emit }) {
        const { user } = getUser();
        const { error, logout } = useLogout();

        const signout = async () => {
            await logout();
            emit('signout');
        }
        return {
            user,
            signout
        }
    }
}
</script>
<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>