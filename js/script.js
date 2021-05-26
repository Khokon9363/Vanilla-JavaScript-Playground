const playground = document.querySelector(".playground")
const result = document.querySelector(".result")
const btn = document.querySelector(".btn")

// Using textContent can prevent XSS attacks. Where innerHTML can't

function output() {
    result.src = "data:text/html;charset=utf-8," + encodeURI(playground.textContent)
}

playground.addEventListener("paste", function(e) {
    e.preventDefault()
    var text = e.clipboardData.getData("text/plain")
    playground.textContent += text
    output()
})