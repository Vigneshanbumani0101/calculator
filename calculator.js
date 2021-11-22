Array.from(document.getElementsByClassName("value")).forEach(button => {
    button.addEventListener('click', () => {
        let result = document.getElementById("expression")
        if (button.value == '=') {
            try {
                result.value = eval(document.getElementById("expression").value);
            } catch {
                result.value = "invalid expression";
            }
        } else if (button.value == 'clear') {
            result.value = "";
        } else {
            result.value += button.value;
        }
    })
})
