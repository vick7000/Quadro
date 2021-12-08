function enviar() {
    let div = document.createElement("div");
    let input = document.getElementById("input").value
    let link = document.getElementById("link").value
    let texto = document.createElement("p")
    let excluir = document.createElement("button")
    let select = document.getElementById("select").value


    if (select == "Normal") {
        div.style.backgroundColor = "white"
    } else if (select == "Importante") {
        div.style.backgroundColor = "yellow"
    } else {
        div.style.backgroundColor = "red"
    }


    texto.addEventListener("click", () => {
        location.href = link
    })

    excluir.addEventListener("click", () => {
        div.remove();
    })

    div.setAttribute("class", "card");

    div.innerHTML = input
    texto.innerHTML = link
    excluir.innerHTML = "X"

    div.appendChild(texto)
    div.appendChild(excluir)

    let espaco = document.getElementById("quadro");
    espaco.appendChild(div)
}