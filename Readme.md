# Zukkmap

## Features

- [x] Tela para listar os clientes cadastrados;
- [x] Filtrar clientes cadastrados por nome;
- [x] Tela para cadastrar o cliente;
- [x] No cadastro do cliente, utilizar a geolocalização do aparelho e inserir um ponto no mapa (endereço do cliente);
- [ ] Na lista de cliente, quando clicar para acessar os dados do cliente, exibir o ponto cadastrado anteriormente no mapa;
- [x] Permitir edição e exclusão do cliente cadastrado  (A edição do usuario não recebe o update do mapa);


## ⚙️ Instalação dos pacotes

```
$ yarn
```

Depois paral linkar as dependencias nativas

```
$ React-native link Realm
```
e por ultimo é só rodar a aplicação

```
$ yarn android
```
para rodar no emulador ou dispositivo fisico android


## não se esqueça de ativar o GPS

## insira sua key da google em android/app/src/main/AndroidManifets.xml

