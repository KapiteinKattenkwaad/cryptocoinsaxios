<template>
    <div id="app">
        <Bitcoin/>
        <Ormeus/>
        <OrmeusHistory/>
    </div>
</template>

<script>

    import Bitcoin from "./components/Bitcoin";
    import Ormeus from "./components/Ormeus";
    import OrmeusHistory from "./components/OrmeusHistory";

    export default {
        name: 'App',
        components: {OrmeusHistory, Ormeus, Bitcoin},
        data() {
            return {
                bitcoin: null,
                loading: true,
                errored: false,
                ormeus: null
            }
        },

        mounted() {

        },
        filters: {

        },
    }
</script>

<style>
    html {
        background: #3e3e3e;
    }
    body {
        color: #0c0c0c;
    }
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        margin-top: 60px;

    }
    .bitcoin, .ormeus, .ormeushistory {

        padding: 1rem;
        border: 4px solid #4f805b;
        border-radius: 15px;
        background: #2f4754;
        max-width: 300px;
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 5px 5px 5px rgba(0,0,0,.2);
    }

    h2 {
        font-size: 2rem;
    }

</style>
