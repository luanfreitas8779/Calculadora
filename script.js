const numbers = (number) => {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display + number 
}

const equal = () => {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = eval(display)

}

const limpaTela = () => {
    document.querySelector('.display').value = ""
}

const invertNum = () => {
    const valueToInvert = document.querySelector(".display").value
    document.querySelector(".display").value = (valueToInvert * (-1))
}