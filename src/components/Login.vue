<template>
    <div class="login">
        <h2>
            Login
        </h2>

        <input type="text" name="username" v-model="input.username" placeholder="username">
        <input type="password" name="password" v-model="input.password" placeholder="password">
        <button @click="login"
                @keyup.enter.native="login"
                type="button">
            login
        </button>
    </div>
</template>

<style>
    input {
        background: transparent;
        border: 2px solid #4f805b;
        font-size: 15px;
        color: white;
        padding: 4px 12px;
        border-radius: 6px;
        display: block;
        text-align: center;
        margin: 1rem auto;
    }

    button {
        color: white;
        background: #118020;
        border: none;
        padding: 6px 12px;
        border-radius: 5px;
        text-transform: uppercase;
        box-shadow: 5px 5px 5px rgba(0,0,0,.2);
        transition: all .3s ease;
    }

    button:hover {
        box-shadow: none;
        cursor: pointer;
        transform: translateY(1px);
    }
    button:focus {
        transform: translateY(2px);
        outline: none;
    }
</style>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if (this.input.username === 'admin' && this.input.password === 'test') {
                    this.$store.commit('setAuthentication', true)
                    this.$router.replace({ name: 'secure' })
                } else {
                    console.log('use admin as username and test as password')
                }
            }
        },

    }
</script>

