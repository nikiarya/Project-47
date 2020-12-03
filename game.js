class Game {
    constructor() {
        
    }

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val(); 
        })
    }

    updateState(state) {
        database.ref("/").update({
            'gameState' : state
        }); 
    }

    async start() {
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
            player.readRoleDecider(); 
        }
        p1 = createSprite(50,50);
        p1.addImage("p1",p1Img); 
        p2 = createSprite(50,100);
        p2.addImage("p2",p2Img); 
        p3 = createSprite(50,150);
        p3.addImage("p3",p3Img); 
        p4 = createSprite(50,200);
        p4.addImage("p4",p4Img); 
        p5 = createSprite(50,250);
        p5.addImage("p5",p5Img); 

        pArray = [p1,p2,p3,p4,p5]; 

    }

    play() {
        form.hide(); 
        Player.getPlayersInfo();  
        if(allPlayers !== undefined) {
            background(bg); 

            var index = 0; 

            var x = 50; 
            var y = 0; 

            for(var plr in allPlayers){
                index = index + 1; 
                y+=50; 

               // if(allPlayers[plr].role == "infector") {
                    //pArray[index-1].addImage(infectorImg); 
               // }

                if (index === player.index){
                    stroke(10); 
                    fill("red"); 
                    ellipse(x,y,60,60); 
                  }
            }
        }
        drawSprites(); 
    }
}