import Feather from '@expo/vector-icons/Feather';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatarPreco } from '../data/cardapio';
import { colors, fonts } from '../theme';

export default function BannerPromocao({ titulo, descricao, preco, imagem, compacto, onVerCardapio }) {
  return (
    <View style={[styles.banner, compacto && styles.bannerCompacto]}>
      <View style={[styles.copy, compacto && styles.copyCompacta]}>
        <View style={styles.eyebrow}>
          <Feather name="tag" size={14} color={colors.gold} />
          <Text style={styles.eyebrowText}>PROMOÇÃO</Text>
        </View>
        <Text accessibilityRole="header" style={[styles.title, compacto && styles.titleCompacto]}>
          {titulo}
        </Text>
        <Text style={styles.description}>{descricao}</Text>
        <View style={styles.actions}>
          <Text style={styles.price}>{formatarPreco(preco)}</Text>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={onVerCardapio}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ver cardápio</Text>
            <Feather name="arrow-down" size={17} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.photoArea, compacto && styles.photoAreaCompacta]}>
        <Image
          accessible
          accessibilityLabel="X-Salada servido com uma porção de batata frita"
          source={imagem}
          resizeMode="cover"
          style={styles.photo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    minHeight: 328,
    borderRadius: 25,
    overflow: 'hidden',
    ...Platform.select({ web: { boxShadow: '0 16px 36px rgba(67, 36, 16, 0.13)' }, default: { elevation: 3 } }),
  },
  bannerCompacto: { flexDirection: 'column-reverse', minHeight: 0, borderRadius: 20 },
  copy: { width: '47%', paddingHorizontal: 38, paddingVertical: 31, justifyContent: 'center' },
  copyCompacta: { width: '100%', paddingHorizontal: 20, paddingVertical: 22 },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 11 },
  eyebrowText: { color: colors.gold, fontWeight: '800', letterSpacing: 1.7, fontSize: 12 },
  title: { color: colors.surface, fontFamily: fonts.heading, fontSize: 56, lineHeight: 61 },
  titleCompacto: { fontSize: 35, lineHeight: 39 },
  description: { color: colors.pale, fontSize: 15, lineHeight: 23, marginTop: 10, maxWidth: 365 },
  actions: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 14, marginTop: 21 },
  price: {
    backgroundColor: colors.gold,
    color: colors.dark,
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 8,
    fontFamily: fonts.heading,
    fontSize: 23,
  },
  button: {
    minHeight: 44,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  buttonText: { color: colors.white, fontWeight: '700', fontSize: 14 },
  photoArea: { width: '53%', position: 'absolute', right: 0, top: 0, bottom: 0 },
  photoAreaCompacta: { width: '100%', aspectRatio: 2.45, position: 'relative' },
  photo: { width: '100%', height: '100%' },
});
