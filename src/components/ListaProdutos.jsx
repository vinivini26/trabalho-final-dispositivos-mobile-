import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { categorias, formatarPreco } from '../data/cardapio';
import { colors, fonts } from '../theme';

const filtros = [{ id: 'todos', titulo: 'Todos' }, ...categorias];
const icones = { todos: 'grid', lanches: 'menu', porcoes: 'package', bebidas: 'coffee' };

export default function ListaProdutos({ compacto, colunas }) {
  const [filtro, setFiltro] = useState('todos');
  const produtos = categorias
    .filter(({ id }) => filtro === 'todos' || id === filtro)
    .flatMap(({ produtos: itens }) => itens);

  return (
    <View style={styles.section}>
      <View style={styles.heading}>
        <Text accessibilityRole="header" style={[styles.title, compacto && styles.titleCompacto]}>
          Nosso cardápio
        </Text>
        <Text style={styles.count} accessibilityLiveRegion="polite">
          {produtos.length} {produtos.length === 1 ? 'item' : 'itens'}
        </Text>
      </View>
      <View style={styles.filters}>
        {filtros.map(({ id, titulo }) => {
          const selecionado = id === filtro;
          return (
            <TouchableOpacity
              key={id}
              accessibilityRole="button"
              accessibilityState={{ selected: selecionado }}
              onPress={() => setFiltro(id)}
              style={[styles.filter, compacto && styles.filterCompacto, selecionado && styles.selected]}
            >
              <Feather name={icones[id]} size={14} color={selecionado ? colors.white : colors.accent} />
              <Text style={[styles.filterText, selecionado && styles.selectedText]}>{titulo}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.grid}>
        {produtos.map((item) => (
          <View
            key={item.id}
            style={[
              styles.cardCell,
              colunas === 3 && styles.third,
              colunas === 2 && styles.half,
              compacto && styles.full,
            ]}
          >
            <View style={[styles.card, compacto && styles.cardCompacto]}>
              <Image source={item.imagem} resizeMode="cover" style={[styles.photo, compacto && styles.photoCompacta]} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.description}>{item.descricao}</Text>
                <Text style={styles.price}>{formatarPreco(item.preco)}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 15 },
  heading: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 },
  title: { color: colors.ink, fontFamily: fonts.heading, fontSize: 41, lineHeight: 47 },
  titleCompacto: { fontSize: 31, lineHeight: 37 },
  count: { color: colors.muted, fontSize: 13, fontWeight: '600' },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  filter: {
    paddingHorizontal: 15, minHeight: 44, borderWidth: 1, borderColor: colors.border, borderRadius: 12,
    backgroundColor: colors.surface, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6,
  },
  filterCompacto: { paddingHorizontal: 7, gap: 4 },
  selected: { backgroundColor: colors.accent, borderColor: colors.accent },
  filterText: { color: colors.ink, fontSize: 13, fontWeight: '700' },
  selectedText: { color: colors.white },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -8, rowGap: 16 },
  cardCell: { paddingHorizontal: 8 },
  full: { width: '100%' },
  half: { width: '50%' },
  third: { width: '33.333%' },
  card: {
    flex: 1, backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1,
    borderRadius: 18, overflow: 'hidden',
  },
  cardCompacto: { flexDirection: 'row', minHeight: 127 },
  photo: { width: '100%', height: 162, backgroundColor: colors.pale },
  photoCompacta: { width: '33%', height: '100%', minHeight: 125 },
  info: { flex: 1, paddingHorizontal: 15, paddingVertical: 13 },
  name: { color: colors.ink, fontSize: 22, fontFamily: fonts.heading },
  description: { color: colors.muted, fontSize: 14, lineHeight: 20, marginTop: 3, marginBottom: 10 },
  price: { color: colors.accentDark, fontSize: 17, fontWeight: '800', marginTop: 'auto' },
});
