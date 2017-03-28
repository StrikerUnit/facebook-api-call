<template>

    <div class="container">

        <div class="page-header">

          <input type="text" v-model="page_id" required="required" placeholder="PAGEID" >
          <button type="button" class="btn btn-info" @click="getPage()">Load</button>

          <h1> {{ page.name }} <small></small></h1>
        </div>

        <div class="panel panel-info" v-for="feed in feeds">
            <div class="panel-heading">
                <h6> {{ feed.created_time | moment("from", "now") }} </h6>
            </div>
            <div class="panel-body">
                {{ feed.message }}
            </div>
        </div>

    </div>

</template>

<script>
    import conf from './conf'

    export default {
        data () {
            return {
                page_id: conf.DEFAULT_PAGE,
                page: {},
                feeds: []
            }
        },
        methods: {
            fetchData() {
                this.$http.get(`${this.page_id}/posts?access_token=${conf.ACCESS_TOKEN}&debug=all&format=json&method=get&pretty=0&suppress_http_code=1`

                ).then(
                    response => {
                        this.feeds = response.body.data
                    },
                    response => {
                        console.log(response)
                    }
                )
            },
            getPage() {
                this.page.name = this.page_id
                this.fetchData(this.page_id)
            }
        },
        created() {
            this.getPage()
        }
    }
</script>

<style lang="sass?indentedSyntax" scoped>

</style>
