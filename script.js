let userScore = 0;
let compScore = 0;

const wishes = document.querySelectorAll(".wish");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//for randmonly selecting computer's wish//
const genCompWish = () =>
{
    const options = ["rock", "paper", "scissor"];
    // Now we need the computer should select a random number
    //from the list of options. So in js we con only access
    //the number from a array but here we have string, so we 
    //we will access it from it's index number by using function Math.random()
    //which will return a random number{here index} in decimal form and between the
    //range 0-1. But here we want the range to be in btwn 0-2
    //so we multiply it with 3 and to remove the numbers after decimal
    //we will use function Math.floor.//
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//for generating draw game//
const drawGame = () =>
{
    console.log("The game was draw");
    msg.innerText = `Game draw. Let's go again `;
    msg.style.backgroundColor = "black";
};

//winning output//
const showWinner = (userWin, userWish, compWish) =>
{ 
    if(userWin)
    {   
        userScore++;
        userScorePara.innerText = userScore;
        console.log("Hurrah ! You Won :)");
        msg.innerText = `Hurrah ! You Won:) :- Your ${userWish} beats ${compWish}.`; 
        msg.style.backgroundColor = "green";
    }
    else
    { 
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Shit!! You Lost:/");
        msg.innerText = `Shit!! You Lost:/ :- ${compWish} beats your ${userWish}.`;
        msg.style.backgroundColor = "red";
    }
}

// for generating user and comp wish//
const playGame = (userWish) =>
{
    const compWish = genCompWish();
    //checking winning and draw condition//
    if(userWish === compWish)
    {
        drawGame();    //call back to draw//
    }
    else
    {
        let userWin = true;   //assuming if the user won in any round//
        if(userWish === "rock")
        {
            //scissor, paper//
            userWin = compWish === "paper" ? false : true;   //comp wins//
        }
        else if(userWish === "paper")
        {   
            //rock, scissor//
            userWin = compWish === "scissor" ? false : true;
        }
        else
        {   
            //paper, rock//
            userWin = compWish == "rock" ? false : true;
        }
        showWinner(userWin, userWish, compWish);
    }

};

// for tracking user Wish our click event we add eventlistener//
wishes.forEach((wish) =>
{
    wish.addEventListener("click", () =>
    {
        //adding id so that the name of wish can be known//
        const userWish = wish.getAttribute("id");
        playGame(userWish);        //callback to user wish
    });
});
