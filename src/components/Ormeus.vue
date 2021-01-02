<template>
    <div class="ormeus">
        <h2>Ormeus Price Index</h2>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>

            <div
                    v-else
                    v-for="(currency, currencySymbol) in ormeus" :key="currency.index"
                    class="currency"
            >
                {{ currencySymbol }} : {{ currency }}

            </div>

        </section>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'Ormeus',
        components: {},
        data() {
            return {
                loading: true,
                errored: false,
                ormeus: null
            }
        },

        mounted() {

            axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=ORME&tsyms=USD,EUR')

                .then(response => (this.ormeus = response.data))

                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

        },
    }
</script>

