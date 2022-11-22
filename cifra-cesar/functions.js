const armazena = [];
const origNums = [];

function criptografar(){
    const ASCICode = [];
    const input = document.getElementById("textField").value;
    let newText = "";
    input = input.toUpperCase();
    
    console.log(input);
    for (let i = 0; i < input.length; i++) {
      ASCICode.push(input[i].charCodeAt() - 64);
      const x = input[i].charCodeAt() - 64;
  
      const codeValue = 3*x + 5;
  
      if (codeValue > 29) {
        let k = -1;
  
        while (codeValue + k * 29 >29) {
          k--;
        }
        armazena.push(codeValue + k * 29);
      } else armazena.push(codeValue);
    }
  
    armazena.forEach((code) => {
      newText += String.fromCharCode(code + 64);
    });
  
    let output = document.getElementById("output");
  
    output.innerHTML += newText;
  
    console.log(ASCICode);
}

function descriptografar() {
    const armazenaNewCode = [];
    let deCripyText = "";
  
    console.log(armazena);
  
    armazena.forEach((code) => {
      const y = code + 64;
      armazenaNewCode.push((y - 5)/3);
    });
  
    console.log(armazenaNewCode);
  
    armazenaNewCode.forEach((code) => {
      deCripyText += String.fromCharCode(code);
    });
  
    const textDesCrypi = document.getElementById("output");
    textDesCrypi.innerHTML = deCripyText;
  }
  