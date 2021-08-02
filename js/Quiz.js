class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  question.hide();

    //write code to change the background color here
    background("blue");

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

    if(allContestants !== undefined){
       fill("Blue");
       textSize(20);
       text("NOTE: Contestant who answered are highlighted in green!",130,230)
    }
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants){
        fill("Green")

      }else{

        fill ("Red");
      }

    }


    
  }

}
