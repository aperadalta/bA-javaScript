var allStars = document.getElementsByClassName("star");
var fixed = false;

function turnGrey (){
    for(let i = 0; i<allStars.length; i++){
        document.getElementById("star" + (i+1)).style.color = "grey";
    }
}

function turnYellow (n){
    for(let i = 1; i<n+2; i++){
        document.getElementById("star" + i).style.color = "yellow";
    }
}

for(let i = 0; i<allStars.length; i++){
    allStars[i].onmouseover = function(e){
        if(!fixed){
            turnGrey();
            turnYellow(i);
        } 
    };

    allStars[i].onclick = function(){
        fixed = true;
        turnGrey();
        turnYellow(i);
    }
}

window.addEventListener('click', function(e){   
    if (document.getElementById('this').contains(e.target)){
    } else{
      fixed = false;
      turnGrey();
    }
  });


