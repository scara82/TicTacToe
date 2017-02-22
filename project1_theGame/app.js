
// fn to hide rules on button clicked
function hideButton() {
    var x = document.getElementById('rules');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
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

var player2ChoiceObject = {
  singerChosed: '',
  turn2: '',
  turn4: '',
  turn3: '',
  turn6: '',
  turn8: ''
}

var winningObj = {
  win1: ['bloc_1', 'bloc_2', 'bloc_3'],
  win2: ['bloc_4', 'bloc_5', 'bloc_6'],
  win3: ['bloc_7', 'bloc_8', 'bloc_9'],
  win4: ['bloc_1', 'bloc_4', 'bloc_7'],
  win5: ['bloc_2', 'bloc_5', 'bloc_8'],
  win6: ['bloc_3', 'bloc_6', 'bloc_9'],
  win7: ['bloc_1', 'bloc_5', 'bloc_9'],
  win8: ['bloc_7', 'bloc_5', 'bloc_3'],
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
    return count;
  }
  else{
      var blockNumber = $(this).attr('id').split('_')[1];
      document.getElementById("block_" + blockNumber).src = (document.getElementById('player2Choice').src);
      var index = 'turn'+ count;
      player2ChoiceObject[index]= event.target.id;
      count +=1;
      return count;
  }
})
