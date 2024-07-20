console.log('JS is attached');

var app = new Vue({
    el: '#app-home', //id that matches with relevant position in the about page html

    data: {

        items: [], //an array to hold all the items it gets from the database
        toggled: false,

    },
    mounted: function () {
        this.loadItems();
    },
    methods: {
        loadItems: function () {

            // Init variables from airatble
            var self = this
            var app_id = "appOpceGFpZ8Snpb7";
            var app_token = "patCPZ4jbJt22sr8e.75096c9e5c5f52be852a9beb67a17938248fc950fec0b0d6bc1b44b41802bccf";
            this.items = []

            //link to correct database in the Channel 22 Airtable
            axios.get(
                "https://api.airtable.com/v0/" + app_id + "/Home?view=Grid%20view",
                {
                    headers: { Authorization: "Bearer " + app_token }
                }
            ).then(function (response) {
                self.items = response.data.records
            }).catch(function (error) {
                console.log(error)
            })
        },

    },

})
