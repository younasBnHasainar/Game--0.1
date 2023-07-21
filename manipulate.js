const memesArray = [
    "memes/images (1).jpg",
    "memes/images (1).jpg",
    "memes/images (1).jpg",
    "memes/images.jpg",
]

const jokesArray = [
    "joke 1",
    "joke 3",
    "joke 4",
    "joke 5",
]

const quotesArray = [
    {
        quote: "quote 1",
        author: "-author of quote 1"
    },
    {
        quote: "quote 2",
        author: "-author of quote 2"
    },
    {
        quote: "quote 2",
        author: "-author of quote 3"
    }

]

const riddlesArray = [
    "riddle 1",
    "riddle 2",
    "riddle 3",
    "riddle 4"
]

const memeTag = document.querySelector(".meme");
const jokesTag = document.querySelector(".jokes");
const quotesTag = document.querySelector(".quotes");
const riddleTag = document.querySelector(".riddle");

function removeExistingOutput(){
    if(memeTag.children.length > 0){
        const existingImgNode = document.querySelector("img")
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
        const existingRiddleNode = document.querySelector(".riddle-text")
        riddleTag.removeChild(existingRiddleNode)
    }
}

const memeBtn = document.querySelector(".meme-btn")
memeBtn.addEventListener("click", displayAMemeImage)


function displayAMemeImage(){

    removeExistingOutput();

    const imgTag = document.createElement("img");
    const attr = document.createAttribute("src");

    const randomIndex = Math.floor(Math.random() * memesArray.length)

    attr.value = memesArray[randomIndex] 
    imgTag.setAttributeNode(attr)
    memeTag.appendChild(imgTag)
}


const jokesButton = document.querySelector(".joke-btn")

jokesButton.onclick = displayAJoke

function displayAJoke(){
    removeExistingOutput();


    const jokesNewDivTag = document.createElement('div')
    const attr = document.createAttribute('class')
    attr.value = "jokes-text"
    jokesNewDivTag.setAttributeNode(attr)
    jokesTag.appendChild(jokesNewDivTag)
    jokesNewDivTag.textContent = jokesArray[Math.floor(Math.random()*jokesArray.length)]

}


const quoteButton = document.querySelector(".quote-btn")

quoteButton.addEventListener("click", () =>{

    removeExistingOutput();

    const quotesNewDivTag = document.createElement('div')
    const attr = document.createAttribute('class')
    attr.value = "quotes-text"
    quotesNewDivTag.setAttributeNode(attr)
    quotesTag.appendChild(quotesNewDivTag)
    const randomQuoteIndex = Math.floor(Math.random()*quotesArray.length)
    quotesNewDivTag.textContent = quotesArray[randomQuoteIndex].quote
    const breakTag = document.createElement('br')
    quotesNewDivTag.appendChild(breakTag)
    const text = document.createTextNode(quotesArray[randomQuoteIndex].author)
    quotesNewDivTag.appendChild(text)
})


const riddleButton = document.querySelector(".riddle-btn")

riddleButton.addEventListener("click", ()=>{
    removeExistingOutput();

    const riddlesNewDivTag = document.createElement('div')
    const attr = document.createAttribute('class')
    attr.value = "riddle-text"
    riddlesNewDivTag.setAttributeNode(attr)
    riddleTag.appendChild(riddlesNewDivTag)
    riddlesNewDivTag.textContent = riddlesArray[Math.floor(Math.random()*riddlesArray.length)]

})