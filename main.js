
var story = {
    sceneOne: {
        title: "Front Yard",
        story: "Oh! The sprinkler is on! What will ${input.value} do?",
        choices: [{
            choice: "Run into the yard!"
        },
        {
            choice: "Run back inside!!"
        }
    ]
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#leave')
    var input = document.querySelector('#label-input')
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
        content.innerHTML = `
        <h1>${story.sceneOne.title}</h1>
        <p>${story.sceneOne.story}</p>
        ${getInputs()}
        
        <button>Move On</button>
       ` 
    })
})

getInputs()
function getInputs() {
    var input = ""
    for(var i = 0; i < story.sceneOne.choices.length; i++) {
        input += `
        <div>
            <input id = "radio${i}" type = "radio" name = "choice"></input>
            <label for "radio1">${story.sceneOne.choices[i].choice}</label>
        </div>`
        }
        return input;
    }