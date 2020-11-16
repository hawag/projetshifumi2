
 /*   
    $("#draggable").click(function() {
    $("#draggable").draggable();
    $("#droppable").droppable();
  
    });

});
 

const draggable = document.querySelectorAll(".draggable"); 

    for (let i = 0; i <draggable.length; i++) {
        draggable[i].addEventListener("click" , function() {

            const joueur = draggable[i].innerHTML;
            const robot = draggable[Math.floor(Math.random() * draggable.length)].innerHTML
            let resultat="";

            if (joueur === robot){   // Si le robot a la mm reponse que le joueur alors egalité
                resulat = "Egalité";
            }

            else if 
                (joueur === "Pierre" && robot === "Ciseau") ||  // Si le joeur a chosi Pierre et le robot ciseau alors il gagnera (les 3 possibilitès)
                (joueur === "Feuille" && robot === "Pierre") ||
                (joueur === "Ciseau" && robot === "Feuille") || 
             { 
                 alert (resultat = "Gagné");
             }

            else {
                alert (resultat = "Perdu");
            } 

        });

    };

    */ 

