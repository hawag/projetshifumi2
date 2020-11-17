
$(function(){  
    var playerChoice = '';


        $(".shifumi").mousedown(function(){
            playerChoice = this.id;
            console.log('mousedown : '+ playerChoice);

        });
        
    alert("Bonjour et bienvenue sur le site de shifumi. \n La pierre écrase les ciseaux et gagne. \n La feuille enveloppe la pierre et gagne. \n Les ciseaux découpent la feuille et gagnent.\n Voici les forces en général au Shifumi.");
    
    
                $(".shifumi").draggable({revert:true});
                $(".shifumi").draggable({revertDuration : 1500});

                $(".playerOne").droppable({

                    drop:function(event, ui) {
                        $(this).css('background' , '#fbdba8');
                                           
                        game(playerChoice);
                    },
                    over:function(event, ui) {
                        $(this).css('background' , 'orange');
                    },
                    out:function(event, ui) {
                        $(this).css('background' , '#eeb57e');
                    }          
                });


function game(playerChoice){ 
    
         console.log('Joueur : '+ playerChoice);

        var computerChoice = Math.random();

    //Créer des conditions pour le choix de l'ordinateur
    if(computerChoice <=0.33){
        computerChoice ="pierre";
    }
    else if(computerChoice <=0.66){
        computerChoice="feuille";
    }
    else{
        computerChoice="ciseaux";
    };

    console.log('Ordinateur : '+ computerChoice);

    // Create condition to watch who is winning
    if((computerChoice === "pierre" && playerChoice === "ciseaux") || (computerChoice === "feuille" && playerChoice=== "pierre") || (computerChoice === "ciseaux" && playerChoice === "feuille")) {
        var sentenceWin = "Tu as perdu"
        
    }
       
    
    else if((playerChoice === "pierre" && computerChoice === "ciseaux") || (playerChoice === "feuille" && computerChoice === "pierre") || (playerChoice === "ciseaux" && computerChoice === "feuille"))
    {
        var sentenceWin = "C'est toi qui à gagné, bravo !"
       
    } 
    
    else 
    {
        var sentenceWin ="Match nul pour cette manche"
    };

    // Display the result
   
    alert(sentenceWin + "\nTon adversaire a joué " + computerChoice) ;
    

}
});