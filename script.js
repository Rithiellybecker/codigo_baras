const output = document.getElementById("output");
const historicoEl = document.getElementById("historico");

// Recupera histórico do LocalStorage
let historico = JSON.parse(localStorage.getItem("historicoCodigos")) || [];

// Função para atualizar a lista na tela
function atualizarHistorico() {
    historicoEl.innerHTML = "";
    historico.slice().reverse().forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.codigo} <br><small>${item.data}</small></span>
            <button class="copy-btn" onclick="copiarCodigo('${item.codigo}')">Copiar</button>
        `;
        historicoEl.appendChild(li);
    });
}

// Função para copiar código
function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo)
        .then(() => alert("Código copiado!"))
        .catch(err => alert("Erro ao copiar: " + err));
}

// Atualiza a lista ao carregar
atualizarHistorico();

// Função chamada quando um código é escaneado
function onScanSuccess(decodedText, decodedResult) {
    output.textContent = `Código lido: ${decodedText}`;
    console.log(decodedText);

    // Adiciona ao histórico e salva
    historico.push({codigo: decodedText, data: new Date().toLocaleString()});
    localStorage.setItem("historicoCodigos", JSON.stringify(historico));

    atualizarHistorico();
}

// Configuração do scanner
var html5QrcodeScanner = new Html5Qrcode("reader");

html5QrcodeScanner.start(
    { facingMode: "environment" }, // Câmera traseira
    {
        fps: 10,    // frames por segundo
        qrbox: 250  // tamanho da caixa de leitura
    },
    onScanSuccess
).catch(err => {
    output.textContent = "Erro ao acessar a câmera: " + err;
});