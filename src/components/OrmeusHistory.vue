<template>
    <div class="ormeushistory">
        <h2>Ormeus History Index</h2>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>

            <div
                    v-else
                    v-for="history in ormeusHistory" :key="history.index"
                    class="currency"
            >
                {{ history.conversionSymbol }} : {{ history.high }}
                <span class="lighten"></span>
      <!--  <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>-->

            </div>

        </section>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'OrmeusHistory',
        components: {},
        data() {
            return {
                loading: true,
                errored: false,
                ormeusHistory: null
            }
        },
        mounted() {

            axios
                .get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ORME&tsym=USD&limit=10')

                .then(response => (this.ormeusHistory = response.data.Data.Data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

        },
        filters: {
            currencydecimal(value) {
                return value.toFixed(2)
            }
        },
    }
</script>


