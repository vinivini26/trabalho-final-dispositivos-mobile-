# Roteiro de apresentação — André Lanches

**Duração sugerida:** 5 minutos, incluindo a demonstração.

**Apresentadores:** substituam “Pessoa 1” e “Pessoa 2” pelos seus nomes.

| Tempo | Quem apresenta | Assunto | O que mostrar |
| --- | --- | --- | --- |
| 0:00–2:25 | Pessoa 1 | Site original, adaptação visual e cardápio | Promoção, filtros e `BannerPromocao.jsx` |
| 2:25–5:00 | Pessoa 2 | Navegação, formulário, discagem e conclusão | Sobre Nós, Contato, botão de pedido e `App.jsx` |

## Antes de começar

Abram o app na aba **Lanches** e deixem os arquivos abaixo em abas prontas no editor. Usem o [vídeo de demonstração](demonstracao.mp4) como apoio se precisarem apresentar sem rodar o projeto. No navegador, a confirmação do formulário aparece na tela. Para demonstrar o discador no celular, configurem previamente um número autorizado conforme o [README](../README.md) e parem quando o número aparecer.

## Pessoa 1 — Adaptação visual e cardápio

**Abertura · 0:00–0:40**

> Oi, pessoal. Eu sou [nome] e estou aqui com [nome] para apresentar o André Lanches. O projeto original era um site estático em HTML e CSS, com os produtos organizados em uma tabela. A nossa proposta foi transformar esse conteúdo em um aplicativo para celular usando JavaScript, React Native e Expo. Mantivemos a marca, as fotos e os preços do cardápio original.

**Interface e promoção · 0:40–1:30**

*Ação: mostre o topo da aba Lanches e toque em “Ver cardápio”.*

> Na tela inicial, a logo fica no canto superior esquerdo e as abas deixam as três áreas do app sempre acessíveis. A promoção de X-Salada com batata aparece em destaque por nove reais e noventa centavos. O botão “Ver cardápio” leva direto para a lista.
>
> A interface foi pensada primeiro para telas pequenas. A SafeAreaView respeita as áreas reservadas do aparelho. Usamos StyleSheet e Flexbox para organizar o espaçamento, as cores e a posição dos elementos. Em telas mais largas, os cartões ganham mais colunas.

**Componentes e filtros · 1:30–2:25**

*Ação: toque em “Porções”, depois em “Bebidas” e volte para “Todos”. Mostre rapidamente* [BannerPromocao.jsx](../src/components/BannerPromocao.jsx) *ou* [ListaProdutos.jsx](../src/components/ListaProdutos.jsx).

> São nove produtos em três categorias. Todos aparecem com foto, descrição e preço em reais. Quando escolho uma categoria, o estado do filtro muda e o React atualiza a lista.
>
> Cada trecho da interface é um componente funcional. No banner, por exemplo, passamos título, descrição, preço e imagem por props. Isso permite trocar a promoção reaproveitando a mesma estrutura. A [nome da Pessoa 2] vai mostrar agora como funcionam a navegação e o atendimento.

## Pessoa 2 — Navegação, atendimento e encerramento

**Navegação · 2:25–3:05**

*Ação: abra “Sobre Nós”, mostre a história e a missão e depois abra “Contato”. Se mostrar código, foque no estado da tela ativa em* [App.jsx](../App.jsx).

> Eu sou [nome]. Em Sobre Nós, reunimos a história, a missão e o diferencial do André Lanches. Quando eu toco em uma aba, o cabeçalho informa ao App qual tela foi escolhida. O useState guarda essa escolha e o React renderiza o componente correspondente. O cabeçalho e o botão de entrega continuam acessíveis enquanto o conteúdo central muda.

**Formulário · 3:05–4:05**

*Ação: toque em “Enviar mensagem” com o formulário vazio. Depois use “Cliente Demo”, “cliente@example.com” e “Gostaria de saber mais sobre os combos”. Envie e mostre a confirmação.*

> A tela de Contato usa TextInput para receber o nome, um e-mail ou WhatsApp com DDD e a mensagem. Se eu tentar enviar com os campos vazios, o app mostra o que precisa ser preenchido. Com os dados válidos, os campos são limpos e aparece uma confirmação. No celular, o aplicativo também usa Alert.alert para confirmar o envio. É uma simulação para demonstrar a interação, sem enviar os dados para um servidor.

**Discagem e conclusão · 4:05–5:00**

*Ação: mostre “Pedir por telefone”. Em um celular com o número autorizado configurado, abra o discador. Em uma sessão sem número configurado, mostre o aviso de telefone indisponível.*

> O botão flutuante fica disponível nas três abas. Com o telefone configurado, o Linking abre o discador do aparelho com o número já preenchido. O telefone do site era fictício, por isso deixamos o número de teste configurável. Sem ele, o app avisa que o telefone está indisponível.
>
> O projeto reúne componentes funcionais, JSX nativo, passagem de props e renderização por estado. Geramos os bundles para Android, iOS e web e testamos o cardápio, os filtros e o formulário no navegador. O código e a demonstração estão no GitHub. Obrigado, pessoal!
