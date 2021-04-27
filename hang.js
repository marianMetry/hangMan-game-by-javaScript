//letters
const letters ="abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray = Array.from(letters);

//select letter container
let letterContainer = document.querySelector(".letter");

//generate latter
lettersArray.forEach(letter =>{
    
    //create span 
    let span = document.createElement("span");
    
    //create letter text node 
    let theLetter =document.createTextNode(letter);
    
    //append the text node into span 
    span.appendChild(theLetter);
    
    //add class to span 
    span.className = "letter-box";
    
    //append span to the letter container
    letterContainer.appendChild(span);
});

//object of words + catogery
const words ={
    programming:["php","javascript","go","vue"],
    movies:["memento","coco","up"],
    pepole:["cici","magdy Yakoob","taha hossin"],
    countries:["egypt","usa","landan","sorya","libnan"]
}

//get randam probarty
let allkeys = Object.keys(words);

//randam number apend on keys length
let randamPropNumber=Math.floor(Math.random()*allkeys.length);

//category
let randamPropName =allkeys[randamPropNumber];

//category words
let randamPropValue =words[randamPropName];

//randam number depend on words
let randamValueNumber =Math.floor(Math.random()*randamPropValue.length);

//property words
let randamValueValue =randamPropValue[randamValueNumber];

//set catogory info
document.querySelector(".game-info .category span").innerHTML=randamPropName;

//select letter guees element
let letterGueesContainer = document.querySelector(".latter-guess");

//convert the choosen word to array
let letterAndSpace = Array.from(randamValueValue);

//create spans depend on the letter of word
letterAndSpace.forEach(letter =>{
    
    //create empty span
    let emptySpan = document.createElement("span");
    
    //if the letter is space
    if(letter===" ")
       {
        //add class to span 
           emptySpan.className ="with-space";
       }
    //append spans to letter guees container
    letterGueesContainer.appendChild(emptySpan);
});

//select guess spans
let GuessSpan= document.querySelectorAll(".latter-guess span");

//set wrong attempts
let wrongAttempts=0;

//set right attempts
let rightAttempts=0;

//select the draw element
let theDraw =document.querySelector(".HangMan-draw");

//handel clicking on letters
document.addEventListener("click",(e) => {
    
    //set the shoose status
     let thestatus=false;
    
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");
         
        //get clicked letter
        let theClickedLetter=e.target.innerHTML.toLowerCase();
        
        //the choosen letter
        let theChoosenWord= Array.from(randamValueValue.toLowerCase());
        
        theChoosenWord.forEach((wordLetter,wordIndex)=>{
            
            //if the clicked letter equal one of  the choosen word letter
            if(theClickedLetter==wordLetter){
                
                //set the status to true
                thestatus=true;
                
                //loop on all guess span
                GuessSpan.forEach((span,spanIndex)=>{
                    
                    if(wordIndex===spanIndex)
                    {
                        span.innerHTML = theClickedLetter;
                        
                        var flag=false;
                        
                        GuessSpan.forEach((span,spanIndex)=>{
                            
                            if(span.innerHTML==="")
                            {
                                flag=true;
                            }
                        });
                        
                        if(flag==false)
                        {
                            winnerGame();
                        }
                        
                       
                    }
                    
                });
                
               
               }
            
        });
        
        //out side loop
        
        //if letter is wrong
        if(thestatus!==true)
           {
           //increase the wrong attempts
               wrongAttempts++;
               
             var c= "wrong" + wrongAttempts;
               
           //add class wrong on the draw element
               theDraw.classList.add(c)  ;
           
           //play fail sound 
               
               document.getElementById("fail").play();
               
           //if the wrong attempts =8
               if(wrongAttempts===8)
                  {
                    endGame();
                      
                    letterContainer.classList.add("finished");
                  }
           }else
               {
                
                   
                   //play success sound 
               
               document.getElementById("success").play();
                   
               
                   
    }
}});



//end game function
function endGame()
    {
      //create popup div
        let div=document.createElement("div");
        
        //create text 
        var x="GAME OVER " +"the word is " + randamValueValue;
        
        
        let divText=document.createTextNode(x);
        
        //append text to div
        div.appendChild(divText);
        
        //add class on div 
        div.className ="popup";
        
        //appent the div on body 
        document.body.appendChild(div);
    }

//function winner
function winnerGame()
{
    
             swal("CONGRATULATION!", "YOU ARE WINNER");
        
}