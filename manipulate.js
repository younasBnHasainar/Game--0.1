

const memeTag = document.querySelector(".meme");
const jokesTag = document.querySelector(".jokes");
const quotesTag = document.querySelector(".quotes");
const riddleTag = document.querySelector(".riddle");

function removeExistingOutputs(){
    if(memeTag.children.length > 0){
        const existingImgNode = document.querySelector(".meme-block")
        memeTag.removeChild(existingImgNode)
    } 
    if(jokesTag.children.length > 0){
        const existingJokeNode = document.querySelector(".jokes-text")
        jokesTag.removeChild(existingJokeNode)
    }
    if(quotesTag.children.length > 0){
        const existingQuotesNode = document.querySelector(".quotes-text")
        quotesTag.removeChild(existingQuotesNode)
    }
    if(riddleTag.children.length > 0){
        riddleTag.removeChild(riddleTag.children.item(0))
        riddleTag.removeChild(riddleTag.children.item(0))
    }
}

function randomGenerator(type){
    if (type == 'meme'){
        return memesArray[Math.floor(Math.random() * memesArray.length)]
    }
    else if (type == 'joke'){
        return jokesArray[Math.floor(Math.random() * jokesArray.length)]
    }
    else if (type == 'quote'){
        return quotesArray[Math.floor(Math.random() * quotesArray.length)]
    }
    else if (type == 'riddle'){
        return riddlesArray[Math.floor(Math.random() * riddlesArray.length)]
    }
}


const memeBtn = document.querySelector(".meme-btn")
memeBtn.addEventListener("click", displayAMemeImage)

function displayAMemeImage(){

    removeExistingOutputs();
    
    const memeBlock = document.createElement('div')
    memeBlock.setAttribute("class","meme-block")
    memeTag.appendChild(memeBlock)

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", randomGenerator("meme"))
    console.log(randomGenerator) 
    memeBlock.appendChild(imgTag)
}


const jokesButton = document.querySelector(".joke-btn")
jokesButton.onclick = displayAJoke

function displayAJoke(){

    removeExistingOutputs();

    const jokesNewDivTag = document.createElement('div')
    jokesNewDivTag.setAttribute("class", "jokes-text")
    jokesTag.appendChild(jokesNewDivTag)
    jokesNewDivTag.textContent = randomGenerator("joke")

}


const quoteButton = document.querySelector(".quote-btn")

quoteButton.addEventListener("click", () =>{

    removeExistingOutputs();

    const quotesNewDivTag = document.createElement('div')
    quotesNewDivTag.setAttribute("class", "quotes-text")
    quotesTag.appendChild(quotesNewDivTag)

    const {quote, author} = randomGenerator("quote")

    quotesNewDivTag.textContent = quote
    const breakTag = document.createElement('br')
    quotesNewDivTag.appendChild(breakTag)

    const textNode = document.createTextNode("- "+author)
    quotesNewDivTag.appendChild(textNode)
    
})


const riddleButton = document.querySelector(".riddle-btn")

riddleButton.addEventListener("click", ()=>{

    removeExistingOutputs();

    const riddleQuestionTag = document.createElement('div')
    riddleQuestionTag.setAttribute("class", "riddle-text")
    riddleTag.appendChild(riddleQuestionTag)
    const {question, answer} = randomGenerator("riddle")
    riddleQuestionTag.textContent = question

    const riddleAnswerTag =  document.createElement('div')
    riddleAnswerTag.setAttribute("class", "riddle-answer")
    riddleAnswerTag.appendChild(document.createTextNode(answer))
    riddleTag.appendChild(riddleAnswerTag)
    riddleAnswerTag.hidden = true;
})

function revealAnswer(){
    const riddleAnswerTag =document.querySelector(".riddle-answer")
    if(riddleTag.children.length > 0 && riddleAnswerTag.hidden == true){
        riddleAnswerTag.hidden = false;
    }
    else if(riddleTag.children.length == 0){
        window.alert("Please Generate A Riddle First")
    }
    else if(riddleAnswerTag.hidden == false){
        window.alert("answer for the riddle has already shown")
    }

}


const memesArray = 
[
    'https://i.redd.it/a0v87gwzoge61.jpg',
    'https://i.redd.it/q29egav34ee61.jpg', 
    'https://i.redd.it/iij16swxjie61.jpg', 
    'https://i.redd.it/vek7dm2hrge61.jpg', 
    'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 
    'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 
    'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 
    'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'
];

const jokesArray = 
[
    'This statement', 
    'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 
    'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 
    'All programmers are playwrights, and all computers are lousy actors.', 
    'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 
    'The generation of random numbers is too important to be left to chance.', 
    'Debugging: Removing the needles from the haystack.', 
    '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 
    'There are two ways to write error-free programs; only the third one works.', 
    'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'
];

const quotesArray = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' }

]

const riddlesArray = [
    { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
    { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
    { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
    { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
  ];