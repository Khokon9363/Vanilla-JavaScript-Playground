const playground = document.querySelector(".playground")
const result = document.querySelector(".result")
const btn = document.querySelector(".btn")

// Using textContent can prevent XSS attacks. Where innerHTML can't

function output() {
    result.src = "data:text/html;charset=utf-8," + encodeURI(playground.textContent)
}

playground.addEventListener("paste", function(e) {
    // cancel paste
    e.preventDefault();

    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');

    // insert text manually
    document.execCommand("insertHTML", false, text);

    // call the output function
    output()
})