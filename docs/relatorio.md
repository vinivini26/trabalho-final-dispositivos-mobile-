---
title: "trabalho-final-dispositivos-mobile-"
subtitle: "Relatório do projeto André Lanches"
date: "24 de novembro de 2026"
lang: pt-BR
---

## Objetivo

O projeto adapta o cardápio de um site de lanchonete para um aplicativo de consulta em Android, iOS e web. A adaptação mantém a marca, as fotos e os preços do material original e organiza o conteúdo para uso em telas de diferentes tamanhos.

## Funcionalidades

- **Cardápio.** Exibe uma promoção e nove produtos, com foto, descrição e preço em reais. Os filtros dividem os itens em lanches, porções e bebidas e atualizam a contagem exibida.
- **Sobre Nós.** Apresenta a história, a missão e os diferenciais da lanchonete.
- **Contato.** Valida nome, e-mail ou WhatsApp com DDD e mensagem. Após a validação, limpa os campos e confirma o envio na própria tela. O fluxo é demonstrativo e funciona sem servidor de mensagens.
- **Pedido por telefone.** Tenta abrir o discador quando um número brasileiro autorizado está configurado. Se o número estiver ausente ou inválido, exibe um aviso.

## Implementação

O aplicativo usa JavaScript, React Native 0.88 e Expo SDK 58. O React Native Web permite executar a mesma interface no navegador. O arquivo `App.jsx` controla a tela ativa, o carregamento das fontes e o layout responsivo. Os componentes de navegação, promoção, produtos, contato e entrega ficam em `src/components/`. O arquivo `src/data/cardapio.js` reúne os dados dos produtos, e `src/theme.js` centraliza os estilos compartilhados. As fotos e os ícones do projeto ficam em `assets/`.

## Execução

Na raiz do repositório, com Node.js 24, execute `npm ci` para instalar as dependências. Use `npm run web` para desenvolver no navegador ou `npm run build:web` para exportar o site estático em `dist/`. Para testar em um celular, execute `npm start` e siga as instruções do README para o Expo Go compatível com o SDK 58.

O telefone de entrega é opcional. Para testar o discador, use `EXPO_PUBLIC_TELEFONE_ENTREGA` em um arquivo `.env` local com um número público autorizado, conforme `.env.example`, e reinicie o Expo.

## Verificação

A instalação pelo lockfile, a inicialização do Expo e a exportação web foram concluídas. No Chromium, com uma janela de 390 × 844 pixels, foram conferidos os nove produtos, a redução para dois itens no filtro Bebidas, o acesso a Sobre Nós, as mensagens do formulário vazio, a confirmação com dados válidos e o aviso de telefone indisponível. A execução em Android e iOS, assim como a abertura do discador com um número configurado, ficou fora dessa verificação.

O repositório inclui ainda um roteiro de apresentação e um vídeo demonstrativo no diretório `docs/`.
