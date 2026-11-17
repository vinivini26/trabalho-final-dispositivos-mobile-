import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { logo } from '../data/cardapio';
import { colors, contentWidth, fonts } from '../theme';

const telas = [
  { id: 'lanches', titulo: 'Lanches' },
  { id: 'sobre', titulo: 'Sobre Nós' },
  { id: 'contato', titulo: 'Contato' },
];

export default function Header({ telaAtiva, onNavigate, compacto }) {
  return (
    <View style={styles.header}>
      <View style={[styles.inner, compacto && styles.innerCompacto]}>
        <TouchableOpacity
          style={styles.brand}
          accessibilityRole="button"
          accessibilityLabel="André Lanches, voltar ao cardápio"
          onPress={() => onNavigate('lanches')}
        >
          <View style={styles.logoBox}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <Text style={styles.brandName}>André Lanches</Text>
        </TouchableOpacity>
        <View style={[styles.nav, compacto && styles.navCompacto]}>
          {telas.map(({ id, titulo }) => {
            const ativa = telaAtiva === id;
            return (
              <TouchableOpacity
                key={id}
                accessibilityRole="tab"
                accessibilityState={{ selected: ativa }}
                onPress={() => onNavigate(id)}
                style={[styles.tab, compacto && styles.tabCompacta, ativa && styles.tabAtiva]}
              >
                <Text style={[styles.tabLabel, ativa && styles.tabLabelAtiva]}>{titulo}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  inner: {
    width: '100%',
    maxWidth: contentWidth + 48,
    alignSelf: 'center',
    minHeight: 76,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  innerCompacto: {
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 11 },
  logoBox: {
    width: 49,
    height: 49,
    borderRadius: 14,
    backgroundColor: colors.pale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: 36, height: 36 },
  brandName: { color: colors.ink, fontFamily: fonts.heading, fontSize: 24 },
  nav: { flexDirection: 'row', gap: 6 },
  navCompacto: { padding: 4, borderRadius: 14, backgroundColor: colors.background },
  tab: { paddingHorizontal: 18, minHeight: 44, justifyContent: 'center', borderRadius: 10 },
  tabCompacta: { flex: 1, alignItems: 'center', paddingHorizontal: 5 },
  tabAtiva: { backgroundColor: colors.pale },
  tabLabel: { color: colors.muted, fontSize: 14, fontWeight: '700', textAlign: 'center' },
  tabLabelAtiva: { color: colors.accentDark },
});
