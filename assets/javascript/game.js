$(document).ready(function() {
  var chosenCharacter, enemyCharacter, choices, enemyArray, superheroArray, haveCharacter, haveAttacker, numEnemies, rounds; 
  var wins = 0;
  var loses = 0;

  function allTheVariables() {   
    chosenCharacter;
    enemyCharacter;

    choices = [];
    superheroArray = [ {
      id: 0,
      name: "Superman",
      pic: 'assets/images/superman.jpg',
      hitPoints: 120,
      attackPower: 19
    }, {
      id: 1,
      name: "Batman",
      pic: 'assets/images/batman.jpg',
      hitPoints: 140,
      attackPower: 9
    } ];

    enemyArray = [ {
      id: 0,
      name: "Joker",
      pic: 'assets/images/joker.jpg',
      hitPoints: 150,
      attackPower: 5
    }, {
      id: 1,
      name: "Lex Luthor",
      pic: 'assets/images/lexluthor.jpg',
      hitPoints: 100,
      attackPower: 25     
    } ];

    haveCharacter = false;
    haveAttacker = false;
    numEnemies = 2;
    rounds = 7;

    for(var i = 0; i < superheroArray.length; i++) {
      choices += "<div id=" + superheroArray[i].id + " class='btn character text-center' value=" + superheroArray[i].id +
      "><img class='houses' src=" + superheroArray[i].pic + " alt=" + superheroArray[i].name + "><br> Hit Points: " + superheroArray[i].hitPoints +
      "<br> Attack Points: " + superheroArray[i].attackPower + " </div>";
    }

    $("#picking").html(choices);

    attachCharacterOnClick();
  }

  function printCharacters() {
    var hero = "<div id=" + superheroArray[chosenCharacter].id + " class='btn character text-center hero' value=" + superheroArray[chosenCharacter].id +
      "><img class='houses' src=" + superheroArray[chosenCharacter].pic + " alt=" + superheroArray[chosenCharacter].name + "><br> HP: " + superheroArray[chosenCharacter].hitPoints +
      "<br> AP: " + superheroArray[chosenCharacter].attackPower + " </div>";
    var badguy = "<div id=" + enemyArray[opponentChar].id + " class='btn character text-center fighting' value=" + enemyArray[opponentChar].id +
      "><img class='houses' src=" + enemyArray[opponentChar].pic + " alt=" + enemyArray[opponentChar].name + "><br> HP: " + enemyArray[opponentChar].hitPoints +
      "<br> AP: " + enemyArray[opponentChar].attackPower + " </div>";
    $('#myguy').html(hero);
    $('#enemy').html(badguy);
  }

  
  function attachCharacterOnClick() {
    $('.character').on("click", function(){
      if(!haveCharacter) {  
        myChar = $(this).attr('id');
        $("#myguy").append(this);
        $(this).addClass("hero");

        haveCharacter = true;
        $('#whathappens').html("");
      }
     //NEED TO PICK ENEMY
    });
  }

 
  
  attachCharacterOnClick();
  allTheVariables();

});