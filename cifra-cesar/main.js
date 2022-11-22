let armazenaCode = [];

function cripy() {
  const ASCICode = [];
  const armazena = [];
  const input = document.getElementById("textField").value;
  let msg_error = document.getElementById("errorCode");
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

  const textCrypi = document.getElementById("resultCripy");

  if (newText != "") {
    msg_error.innerHTML = " ";
    textCrypi.textContent = newText;
  } else {
    textCrypi.innerHTML = " ";
    msg_error.textContent = "Nenhum valor encontrado para codificação";
  }

  armazenaCode = armazena;
  console.log(armazenaCode);
}

function desCripy() {
  let msg_error = document.getElementById("errorDecode");

  let armazenaNewCode = [];
  let deCripyText = "";

  armazenaCode.forEach((code) => {
    const y = code + 31;
    armazenaNewCode.push(y - 3);
  });

  armazenaNewCode.forEach((code) => {
    deCripyText += String.fromCharCode(code);
  });

  const textDesCrypi = document.getElementById("resultDesCripy");
  textDesCrypi.innerHTML = " ";

  if (deCripyText != "") {
    msg_error.innerHTML = " ";
    textDesCrypi.textContent = deCripyText;
  } else {
    textDesCrypi.innerHTML = " ";
    msg_error.textContent = "Nenhum valor codificado encontrado";
  }

  armazenaNewCode = [];
}
