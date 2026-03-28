# 📷 Leitor de Códigos PWA

Um aplicativo web progressivo (PWA) para **escanear QR Codes e códigos de barras** diretamente pelo navegador, com histórico salvo no celular, funcionando offline e podendo ser instalado na tela inicial como um app.

## 📝 Funcionalidades

- Escaneia **QR Codes** e **códigos de barras** em tempo real.
- Usa a **câmera traseira** do celular automaticamente.
- Salva **histórico de códigos escaneados** com data e hora no LocalStorage.
- Permite **copiar qualquer código** com um clique.
- Funciona **offline** após a primeira carga (PWA).
- Pode ser **adicionado à tela inicial** do celular como um app.

## ⚡ Tecnologias

- **HTML, CSS e JavaScript**
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) para leitura de códigos
- **LocalStorage** para persistência de dados
- **Service Worker** para funcionalidade offline
- **Manifest.json** para transformar em PWA

## 🚀 Como usar

1. Abra o navegador do celular ou computador.
2. Acesse a URL do GitHub Pages onde o projeto está hospedado:
   https://<seu-usuario>.github.io/leitor-codigos/
3. Permita o acesso à câmera.
4. Aponte a câmera para o QR Code ou código de barras.
5. Veja o resultado em tempo real e os códigos armazenados no histórico.

## 📲 Instalação no celular (como app)

- **Android (Chrome):**  
  1. Abra a URL do projeto.  
  2. Toque no menu do navegador → **Adicionar à tela inicial**.  
  3. O app abrirá em tela cheia, como um aplicativo real.

- **iPhone (Safari):**  
  1. Abra a URL do projeto.  
  2. Toque no botão **Compartilhar** → **Adicionar à Tela de Início**.  
  3. O app abrirá como aplicativo nativo.

## 🛠 Estrutura do projeto

leitor-codigos/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── icon-192.png
└── icon-512.png

## 📦 Hospedagem

Você pode hospedar facilmente em **GitHub Pages**, **Netlify** ou **Vercel**.

**GitHub Pages:**

1. Faça upload de todos os arquivos no repositório.  
2. Vá em **Settings → Pages → Source → main branch → /root**.  
3. Salve e aguarde a publicação.  
4. Acesse via:  
   https://<seu-usuario>.github.io/leitor-codigos/

## 💡 Observações

- O histórico é salvo **somente no dispositivo local** (LocalStorage).  
- Funciona offline depois da primeira carga devido ao **service worker**.  
- Para resetar o histórico, basta limpar os dados do site no navegador.

## 🔗 Links Úteis

- [html5-qrcode](https://github.com/mebjas/html5-qrcode)  
- [Guia GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages)

Feito com ❤️ por Rithi Becker