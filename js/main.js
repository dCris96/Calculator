const display = document.querySelector("#result");
const buttons = document.querySelectorAll(".button");
const etiqueta = document.querySelector("#operation");

buttons.forEach(btn => {
    btn.addEventListener('click', function(){

        const valorBoton = btn.textContent;

        switch (btn.id) {
            case "ac":
                etiqueta.textContent = "0";
                display.value = "0";
                break;
            case "masMenos":
                etiqueta.textContent = parseFloat(etiqueta.textContent) * -1;
                break;
            case "%":
                display.value = parseFloat(etiqueta.textContent) / 100;
                break;
            case "igual":
                try {
                    display.value = eval(etiqueta.textContent);
                } catch (error) {
                    display.value = "Error";
                }
                break;
            case "borrar":
                etiqueta.textContent = etiqueta.textContent.slice(0, -1);
                if (etiqueta.textContent === "") {
                    etiqueta.textContent = "0";
                }
                break;
            case "punto":
                if (!etiqueta.textContent.includes(".")) {
                    etiqueta.textContent += ".";
                }else if (!etiqueta.textContent.includes("+") && !etiqueta.textContent.includes("-") && !etiqueta.textContent.includes("*") && !etiqueta.textContent.includes("/")) {
                    let ultimoCaracter = etiqueta.textContent[etiqueta.textContent.length - 1];
                    if (ultimoCaracter !== ".") {
                        etiqueta.textContent += ".";
                    }
                }
                break;
            default:
                if (etiqueta.textContent === "0" || etiqueta.textContent === "Error") {
                    etiqueta.textContent = valorBoton;
                } else {
                    etiqueta.textContent += valorBoton;
                }
        }
        
    })
});