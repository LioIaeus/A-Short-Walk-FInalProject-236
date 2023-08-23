document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#leave')
    var input = document.querySelector('#label-input')
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
        content.innerHTML = `
        <h1>Front Yard</h1>
        <p>Oh! The sprinkler is on! What will ${input.value} do? </p>
        <div>
            <input id = "radio1" type = "radio" name = "choice"></input>
            <label for "radio1">Run back inside!!</label>
        </div>
        <div>
            <input id = "radio2" type = "radio" name = "choice"></input>
            <label for "radio2">Run into the yard!</label>
        </div>

        <button>Move On</button>
       ` 
    })
})
