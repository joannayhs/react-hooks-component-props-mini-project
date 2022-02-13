import React from 'react'

function divideMinutes(minutes) {
    const coffeeCup = "☕️"
    const bentoBox = "🍱"

    let emojis = ""

    if(minutes < 30){
        for ( let i = 0; i < minutes; i += 5){
            emojis += coffeeCup
        }
    }else if(minutes > 30){
        for (let i = 0; i < minutes; i += 10){
            emojis += bentoBox
        }
    }
    return emojis
}


function Article({title, date="January 1, 1970", preview, minutes}) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small> <small>{divideMinutes(minutes) + minutes + " min read"}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article