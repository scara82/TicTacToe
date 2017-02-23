
// fn to hide rules on button clicked
function hideButton() {
    var x = document.getElementById('rules');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
$('#newGameBtn').on('click', clearGame);
// $('#rules').on('click', showButton);

function  showButton(){
  var y = document.getElementById('newGameBtn');
  if (y.style.display === 'block') {
      y.style.display = 'none';
  } else {
      y.style.display = 'block';
  }
}

var player1ChoiceObject = {
  singerChosed: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var player1ChoiceObjectReset = {
  singerChosed: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var player2ChoiceObject = {
  singerChosed: '',
  turn2: '',
  turn4: '',
  turn3: '',
  turn6: '',
  turn8: ''
}

var player2ChoiceObjectReset = {
  singerChosed: '',
  turn1: '',
  turn3: '',
  turn5: '',
  turn4: '',
  turn7: ''
}

var winningObj = {
  win1: ['block_1', 'block_2', 'block_3'],
  win2: ['block_4', 'block_5', 'block_6'],
  win3: ['block_7', 'block_8', 'block_9'],
  win4: ['block_1', 'block_4', 'block_7'],
  win5: ['block_2', 'block_5', 'block_8'],
  win6: ['block_3', 'block_6', 'block_9'],
  win7: ['block_1', 'block_5', 'block_9'],
  win8: ['block_7', 'block_5', 'block_3'],
}

$('.player1').on('click', 'img', function() {
  $('#player1Choice').attr('src', $(this).attr('src'));
  player1ChoiceObject.singerChosed = event.target.id;
});

$('.player2').on('click', 'img', function() {
  $('#player2Choice').attr('src', $(this).attr('src'));
  player2ChoiceObject.singerChosed = event.target.id;
});

var count = 1;
$('.chart').on('click','img', function(){
  if (count % 2) {
    var blockNumber= $(this).attr('id').split('_')[1];
    document.getElementById("block_" + blockNumber).src = (document.getElementById('player1Choice').src);
    var index = 'turn'+ count;
    player1ChoiceObject[index]= event.target.id;
    count +=1;
    var player1Bets = Object.values(player1ChoiceObject);
    var winValues = Object.values(winningObj);

    for (var i = 0; i < winValues.length; i++) {
      if (player1Bets.indexOf(winValues[i][0]) > 0 &&
          player1Bets.indexOf(winValues[i][1]) > 0 &&
          player1Bets.indexOf(winValues[i][2]) > 0) {
            if (player1Bets[0] === 'georgeMicheal1') {
              if (Math.floor(Math.random() * 2) === 1) {
                georgeWinner();
                georgeMicheal_trk1.play();
              }
              else{
                georgeMicheal_trk2.play();
              }
            }
            else if (player1Bets[0] === 'davidBowie1') {
              davidWinner();
              if (Math.floor(Math.random() * 2) === 1) {
                davidBowie_trk1.play();
              }
              else{
                davidBowie_trk2.play();
              }
            }
            else if (player1Bets[0] === 'prince1') {
              princeWinner();
              if (Math.floor(Math.random() * 2) === 1) {
                prince_trk1.play();
              }
              else{
                prince_trk2.play();
              }
            }
            else if (player1Bets[0] === 'leonardCohen1') {
              cohenWinner();
              if (Math.floor(Math.random() * 2) === 1) {
                cohen_trk1.play();
              }
              else{
                cohen_trk2.play();
              }
            }
      }
    }
  }
  else{
      var blockNumber = $(this).attr('id').split('_')[1];
      document.getElementById("block_" + blockNumber).src = (document.getElementById('player2Choice').src);
      var index = 'turn'+ count;
      player2ChoiceObject[index]= event.target.id;
      count +=1;

      var player2Bets = Object.values(player2ChoiceObject);
      var winValues = Object.values(winningObj);

      for (var i = 0; i < winValues.length; i++) {
        if (player2Bets.indexOf(winValues[i][0]) > 0 &&
            player2Bets.indexOf(winValues[i][1]) > 0 &&
            player2Bets.indexOf(winValues[i][2]) > 0) {
              if (player2Bets[0] === 'georgeMicheal2') {
                georgeWinner();
                if (Math.floor(Math.random() * 2) === 1) {
                  georgeMicheal_trk1.play();
                }
                else{
                  georgeMicheal_trk2.play();
                }
              }
              else if (player2Bets[0] === 'davidBowie2') {
                davidWinner();
                if (Math.floor(Math.random() * 2) === 1) {
                  davidBowie_trk1.play();
                }
                else{
                  davidBowie_trk2.play();
                }
              }
              else if (player2Bets[0] === 'prince2') {
                princeWinner();
                if (Math.floor(Math.random() * 2) === 1) {
                  prince_trk1.play();
                }
                else{
                  prince_trk2.play();
                }
              }
              else if (player2Bets[0] === 'leonardCohen2') {
                cohenWinner();
                if (Math.floor(Math.random() * 2) === 1) {
                  cohen_trk1.play();
                }
                else{
                  cohen_trk2.play();
                }
              }
        }
      }
  }
})

var clearGame = function(){
    stopAudio();
  player1ChoiceObject = player1ChoiceObjectReset;
  player2ChoiceObject = player2ChoiceObjectReset;
  $('#player1Choice').attr('src', 'img/chart_3.png');
  $('#player2Choice').attr('src', 'img/chart_3.png');
  for (var i = 1; i < 10; i++) {
    document.getElementById("block_" + i).src = "img/background.jpg";
  }
}

var davidWinner = function(){
  for (var i = 1; i < 10; i++) {
      if (i % 2) {
        document.getElementById("block_" + i).src = "img/davidBowie.jpg";
      }
    else{
      document.getElementById("block_" + i).src = "img/background.jpg";
    }
  }
}

var princeWinner = function(){
  for (var i = 1; i < 10; i++) {
      if (i % 2) {
        document.getElementById("block_" + i).src = "img/prince.jpg";
      }
    else{
      document.getElementById("block_" + i).src = "img/background.jpg";
    }
  }
}

var georgeWinner = function(){
  for (var i = 1; i < 10; i++) {
      if (i % 2) {
        document.getElementById("block_" + i).src = "img/george.jpg";
      }
    else{
      document.getElementById("block_" + i).src = "img/background.jpg";
    }
  }
}

var cohenWinner = function(){
  for (var i = 1; i < 10; i++) {
      if (i % 2) {
        document.getElementById("block_" + i).src = "img/leonardCohen.png";
      }
    else{
      document.getElementById("block_" + i).src = "img/background.jpg";
    }
  }
}

function stopAudio() {
    var savePlayer = $('#audioHolder').html(); // Save player code
    $('#georgeMicheal_trk1').remove();
    $('#georgeMicheal_trk2').remove();
    $('#davidBowie_trk1').remove();
    $('#davidBowie_trk2').remove();
    $('#georgeMicheal_trk1').remove();
    $('#georgeMicheal_trk2').remove();
    $('#prince_trk1').remove();
    $('#prince_trk2').remove();
    $('#cohen_trk1').remove();
    $('#cohen_trk2').remove();  // Remove player from DOM
    $('#audioHolder').html(savePlayer); // Restore it
}
