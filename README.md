# André Lanches

Aplicativo de cardápio em React Native e Expo para Android, iOS e web. A adaptação usa as fotos, a marca e os preços do site fornecido na atividade.

## Executar o projeto

Use Node.js 24 LTS e npm. Na raiz do projeto:

```sh
npm ci
npm start
```

Escaneie o QR Code com uma versão do Expo Go compatível com o SDK 58. O computador e o celular devem estar na mesma rede. Você também pode usar `npm run android` ou `npm run ios` com um emulador ou simulador configurado.

- `npm run web` abre o projeto no navegador para desenvolvimento.
- `npm run build:web` gera os arquivos estáticos da web em `dist/`.

## Testar o telefone e o formulário

1. Copie `.env.example` para `.env`.
2. Preencha `EXPO_PUBLIC_TELEFONE_ENTREGA` com um número brasileiro autorizado para o teste, usando `+55`, DDD e número, sem espaços.
3. Reinicie o Expo. Em um celular, toque em **Pedir por telefone** e confira o número que aparece no discador.

O telefone original era um exemplo fictício. Sem um número configurado, o aplicativo exibe um aviso. Variáveis com prefixo `EXPO_PUBLIC_` aparecem no código gerado e são adequadas apenas para dados públicos.

Em **Contato**, o formulário verifica nome, e-mail ou WhatsApp com DDD, e mensagem. O envio é demonstrativo e a confirmação ocorre no próprio aplicativo.

## Entrega da atividade

O comentário de 12 linhas para o Google Classroom está em [docs/comentario-classroom.txt](docs/comentario-classroom.txt).
