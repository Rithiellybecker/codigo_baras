const output = document.getElementById("output");
const historicoEl = document.getElementById("historico");

// Recupera histórico
let historico = JSON.parse(localStorage.getItem("historicoCodigos")) || [];

// Atualiza lista
function atualizarHistorico() {
    historicoEl.innerHTML = "";
    historico.slice().reverse().forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.codigo} <br><small>${item.data}</small></span>
            <button class="copy-btn" onclick="copiarCodigo('${item.codigo}')">Copiar</button>
        `;
        historicoEl.appendChild(li);
    });
}

// Copiar código
function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo)
        .then(() => alert("Código copiado!"));
}

// Atualiza ao carregar
atualizarHistorico();

// Quando escanear
function onScanSuccess(decodedText) {
    output.textContent = `Código lido: ${decodedText}`;

    historico.push({
        codigo: decodedText,
        data: new Date().toLocaleString()
    });

    localStorage.setItem("historicoCodigos", JSON.stringify(historico));
    atualizarHistorico();
}

// 👇 AQUI ESTÁ A CORREÇÃO PRINCIPAL
const scanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: 250
    },
    false
);

scanner.render(onScanSuccess);