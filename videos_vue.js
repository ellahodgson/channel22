console.log('JS is attached');

window.onload = (event)=>{
    let myAlert = document.querySelector('#exampleModal');
    let bsAlert = new bootstrap.Modal(myAlert);
    bsAlert.show();
}

var app = new Vue({
    el: '#app-video', //id that matches with relevant position in the about page html

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
                "https://api.airtable.com/v0/" + app_id + "/Videos?view=Grid%20view",
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


    //computed functions which link to a specific subset from the database that matches one of the fields 
    computed: {

        filteredChannel22: function () {
            return this.items.filter(function (filteredItem) {
                return filteredItem.fields.iD == "Channel 22"

            })
        },

        filteredArtsItems: function () {
            return this.items.filter(function (filteredItem) {
                return filteredItem.fields.iD == "Arts Item"

            })
        },

        filteredEvents: function () {
            return this.items.filter(function (filteredItem) {
                return filteredItem.fields.iD == "Events"

            })
        },

        
    }

})
