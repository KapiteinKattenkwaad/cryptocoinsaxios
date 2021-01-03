<template>
    <div class="secure">
        <h2>
            Secure
        </h2>
        <Ormeus />
        <Bitcoin />
        <OrmeusHistory />
    </div>
</template>

<script>

    import Ormeus from "./Ormeus";
    import Bitcoin from "./Bitcoin";
    import OrmeusHistory from "./OrmeusHistory";
    export default {
        name: 'Secure',
        components: {OrmeusHistory, Bitcoin, Ormeus},

    }
</script>

