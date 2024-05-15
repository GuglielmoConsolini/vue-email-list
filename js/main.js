const { createApp } = Vue

createApp({

    data() {
        return {
            emails: [],
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        getEmails() {
            for (let i = 0 ; i < 10; i++) {
                axios.get(this.indirizzo).then((result) => { 

                    let codiceRisposta = `${result.status}/${result.statusText}`;
                    let datiRisposta = result.data;
    
                    console.log("Ricevuta risposta", codiceRisposta, datiRisposta);
    
                    this.emails.push(datiRisposta.response);
    
                });
            }
            
        }
    },
    mounted() {
        console.log("App montata");

        this.getEmails();
    }

}).mount('#app');