var quotes = [
    'The purpose of our lives is to be happy',
    'Life is what happens when you’re busy making other plans',
    'Get busy living or get busy dying',
    'You only live once, but if you do it right, once is enough',
    'Never let the fear of striking out keep you from playing the game.',
    'Money and success don’t change people; they merely amplify what is already there',
    'In order to write about life first you must live it.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'The unexamined life is not worth living',
    'Turn your wounds into wisdom',
    'The way I see it, if you want the rainbow, you gotta put up with the rain',
    'Live for each second without hesitation',
    'The healthiest response to life is joy',
    'Life is ten percent what happens to you and ninety percent how you respond to it.'
]

function Quote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('displayquote').innerHTML = quotes[randomNumber];
}