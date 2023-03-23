const { createApp } = Vue

createApp(
    {
        data() {
            return {
               randommail: " ",
               maillist: [],
               mailFlag: false,
            }  
        },

        methods: {
            mailprint(){
                console.log(this.randommail);
            },
            
        },

        mounted() {
            
            for(i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                    this.randommail = response.data.response;
                    this.maillist.push(this.randommail);       
                }
            )
         }
         if(this.maillist.length == 10){
            this.mailflag = true;
        };        
    }
}
).mount('#app')