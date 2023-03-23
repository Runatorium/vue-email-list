const { createApp } = Vue

createApp(
    {
        data() {
            return {
               randommail: " ",
               maillist: [],
            }  
        },

        methods: {
            mailprint(){
                console.log(this.randommail);
            },
            arraymailprint(){
                for(i=0;i<this.mailprint.length; i++){
                    console.log(this.maillist[i]);
                }
            },
        },

        mounted() {
            
            for(i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                
                    this.randommail = response.data.response;
                    this.maillist.push(this.randommail);  
                    if(this.maillist.length == 10){
                        console.log(this.maillist);
                    }                  
                }
            )
         }
    }
}
).mount('#app')