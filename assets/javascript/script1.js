// Botões
const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");

const Len = document.getElementById("passLenght");
const result = document.getElementById("result");

btnGenerate.addEventListener('click', () => {
    const Len = document.getElementById("passLenght");

    function generatePasswd() {

        let pass = "";

        do {
            pass += (Math.random() * (10 - 4 + 1) + 4).toString(36).substring(2);
        } while (pass.length < Len.value)
        pass = pass.substring(0, Len.value)
        return pass
    }
    result.value = generatePasswd()
});


function parar(params) {

}