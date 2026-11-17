export const logo = require('../../assets/cardapio/logo.png');

export const promocao = {
  titulo: 'X-Salada + Batata',
  descricao: 'O clássico da casa com uma porção de batata frita.',
  preco: 9.9,
  imagem: require('../../assets/cardapio/promocao.jpg'),
};

export const categorias = [
  {
    id: 'lanches',
    titulo: 'Lanches',
    produtos: [
      {
        id: 'x-salada',
        nome: 'X-Salada',
        descricao: 'Hambúrguer com queijo e salada no pão com gergelim.',
        preco: 8,
        imagem: require('../../assets/cardapio/xsalada.jpg'),
      },
      {
        id: 'cheddar',
        nome: 'Cheddar',
        descricao: 'Hambúrguer com cheddar derretido.',
        preco: 17,
        imagem: require('../../assets/cardapio/cheddar.jpg'),
      },
      {
        id: 'x-burguer',
        nome: 'X-Burguer',
        descricao: 'Hambúrguer clássico com queijo.',
        preco: 1.5,
        imagem: require('../../assets/cardapio/cheese.jpg'),
      },
      {
        id: 'big-tower',
        nome: 'Big Tower',
        descricao: 'Dois hambúrgueres com camadas de queijo.',
        preco: 20.5,
        imagem: require('../../assets/cardapio/bigtower.jpg'),
      },
      {
        id: 'x-frango',
        nome: 'X-Frango',
        descricao: 'Sanduíche de frango empanado e requeijão cremoso.',
        preco: 12.9,
        imagem: require('../../assets/cardapio/fragonrequeijao.jpg'),
      },
    ],
  },
  {
    id: 'porcoes',
    titulo: 'Porções',
    produtos: [
      {
        id: 'batata-frita',
        nome: 'Batata Frita',
        descricao: 'Porção de batatas douradas e crocantes.',
        preco: 7,
        imagem: require('../../assets/cardapio/batata.jpg'),
      },
      {
        id: 'nuggets',
        nome: 'Nuggets',
        descricao: 'Porção com 8 unidades de frango empanado.',
        preco: 6.5,
        imagem: require('../../assets/cardapio/nuggets.jpg'),
      },
    ],
  },
  {
    id: 'bebidas',
    titulo: 'Bebidas',
    produtos: [
      {
        id: 'refrigerante',
        nome: 'Refri (lata)',
        descricao: 'Refrigerante gelado em lata.',
        preco: 4.5,
        imagem: require('../../assets/cardapio/refri.jpg'),
      },
      {
        id: 'suco',
        nome: 'Sucos',
        descricao: 'Sucos gelados em vários sabores.',
        preco: 8.5,
        imagem: require('../../assets/cardapio/sucos.jpg'),
      },
    ],
  },
];

const moeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatarPreco(preco) {
  return moeda.format(preco);
}
