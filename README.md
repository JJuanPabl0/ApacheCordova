# 📱 Introdução ao Apache Cordova

Apache Cordova é um framework de desenvolvimento mobile que permite criar aplicativos híbridos utilizando tecnologias web como HTML, CSS e JavaScript. Ele fornece acesso a APIs nativas através de plugins, permitindo interações com funcionalidades do dispositivo como câmera, GPS e armazenamento.

## 👥 Equipe
- Vinicius Pires ([vinicinnnn](https://github.com/vinicinnnn))
- Juan Pablo ([JJuanPabl0](https://github.com/JJuanPabl0))
- Luis Henrique ([DarkBytess](https://github.com/DarkBytess))

## 📌 Pré-requisitos
Antes de começar, instale os seguintes softwares:
- [Node.js](https://nodejs.org/)
- [Apache Cordova](https://cordova.apache.org/)
  ```sh
  npm install -g cordova
  ```
- [Android SDK](https://developer.android.com/studio) (para rodar em dispositivos Android)

## 🚀 Criando o Projeto
1. Criar um novo aplicativo:
   ```sh
   cordova create meuApp com.exemplo.meuApp "Meu Aplicativo"
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd meuApp
   ```
3. Adicione a plataforma Android:
   ```sh
   cordova platform add android
   ```

## ⚡ Principais Comandos
- Listar plataformas suportadas:
  ```sh
  cordova platform list
  ```
- Rodar o app em um emulador ou dispositivo:
  ```sh
  cordova run android
  ```
- Construir o APK:
  ```sh
  cordova build android
  ```

## 🛠️ Desenvolvimento do Aplicativo
Para testar funcionalidades nativas, adicione plugins. Exemplo: acessar a câmera do dispositivo.
```sh
cordova plugin add cordova-plugin-camera
```

Exemplo de código para capturar uma foto:
```js
document.getElementById("btnFoto").addEventListener("click", function() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });

    function onSuccess(imageURI) {
        let image = document.getElementById("minhaImagem");
        image.src = imageURI;
    }

    function onFail(message) {
        alert("Erro: " + message);
    }
});
```

## 🔄 Rotação - Requisito Extra
Para a atividade de rotação, o novo requisito será **adicionar um botão de geolocalização**.

1. Adicionar o plugin de geolocalização:
   ```sh
   cordova plugin add cordova-plugin-geolocation
   ```
2. Implementar o botão no código HTML:
   ```html
   <button id="btnLocalizacao">Obter Localização</button>
   <p id="localizacao"></p>
   ```
3. Código JavaScript para capturar e exibir a localização do usuário:
   ```js
   document.getElementById("btnLocalizacao").addEventListener("click", function() {
       navigator.geolocation.getCurrentPosition(function(position) {
           document.getElementById("localizacao").innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
       }, function(error) {
           alert("Erro ao obter localização: " + error.message);
       });
   });
   ```

## 📲 Testando no Celular
1. Conectar o celular via USB e ativar **Depuração USB**.
2. Rodar o comando:
   ```sh
   cordova run android --device
   ```
3. Caso necessário, instalar manualmente o APK gerado em `platforms/android/app/build/outputs/apk/debug/`.

## 🚧 Possíveis Problemas e Soluções
- **Erro de SDK não encontrado:** Verifique se o Android SDK está instalado e o caminho configurado.
- **Erro ao rodar no dispositivo:** Certifique-se de que o modo de desenvolvedor está ativado e a depuração USB está permitida.

## 📖 Referências
- [Documentação Oficial](https://cordova.apache.org/docs/en/latest/)
- [Plugins do Cordova](https://cordova.apache.org/plugins/)
