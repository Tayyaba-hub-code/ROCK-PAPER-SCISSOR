 let score= {
  wins: 0,
  losses: 0,
  Tie: 0
 };
 updatescore();
  function playeGame(playerMove){
    const computer=pickComputerMove();
    let result = '';

    if(playerMove === 'scissors'){
      if(computer === 'rock'){
        result ='you lose';
      }else if(computer === 'paper'){
        result = 'you win';
      }
      else if(computer === 'scissors'){
        result ='Tie';
      }
    }
    else if(playerMove=== 'rock'){
       if(computer === 'rock'){
        result ='Tie';
      }else if(computer === 'paper'){
        result = 'you lose';
      }
      else if(computer === 'scissors'){
        result ='you win';
      }

    }
     else if(playerMove=== 'paper'){
       if(computer === 'rock'){
        result ='you win';
      }else if(computer === 'paper'){
        result = 'Tie';
      }
      else if(computer === 'scissors'){
        result ='you lose';
      }

    }
    if(result === 'you win')
     {
      score.wins+=1;
     }
     else if(result === 'you lose'){
      score.losses+=1;
     }
     else if(result === 'Tie'){
      score.Tie+=1;
     }
      updatescore();
      document.querySelector('.js-result').innerHTML=result;

    
      document.querySelector('.js-moves').innerHTML =
        `<img src="${playerMove}-emoji.png" alt="${playerMove}" class="move-emoji"> 
         <span>vs</span> 
         <img src="${computer}-emoji.png" alt="${computer}" class="move-emoji">`;
  }



  function updatescore(){
    document.querySelector('.js-score')
    .innerHTML=`wins: ${score.wins},losses: ${score.losses},Tie: ${score.Tie}`;
  }

  function pickComputerMove(){
   let computermove= '';
   let random= Math.random();
  if(random >=0 && random < 1/3){
    computermove = 'rock';

  }
  else if(random >=1/3 && random <2/3){
    computermove = 'paper';
  }
  else if(random >= 2/3 && random <1){
    computermove ='scissors';

  }
  return computermove;

  }
  function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.Tie = 0;
  updatescore();
}

  