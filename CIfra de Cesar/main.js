const armazena = [];

function cripy() {
  const ASCICode = [];
  const input = document.getElementById("textField").value;
  let newText = "";

  for (let i = 0; i < input.length; i++) {
    ASCICode.push(input[i].charCodeAt());
    const x = input[i].charCodeAt() - 31;

    const codeValue = x + 3;

    if (codeValue > 91) {
      let k = -1;

      while (codeValue + k * 91 > 91) {
        k--;
      }
      armazena.push(codeValue + k * 91);
    } else armazena.push(codeValue);
  }

  armazena.forEach((code) => {
    newText += String.fromCharCode(code + 31);
  });

  const textCrypi = document.getElementById("Resultado");

  textCrypi.textContent = null;
  textCrypi.textContent = newText;

  console.log(ASCICode);
}

function desCripy() {
  const armazenaNewCode = [];
  let deCripyText = "";

  console.log(armazena);

  armazena.forEach((code) => {
    const y = code + 31;
    armazenaNewCode.push(y - 3);
  });

  console.log(armazenaNewCode);

  armazenaNewCode.forEach((code) => {
    deCripyText += String.fromCharCode(code);
  });

  const textDesCrypi = document.getElementById("Resultado");
  textDesCrypi.innerHTML = deCripyText;
}
