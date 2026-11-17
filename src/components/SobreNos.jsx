import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors, fonts } from '../theme';

export default function SobreNos() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.pageTitle}>Sobre nós</Text>

      <View style={styles.story}>
        <Text accessibilityRole="header" style={styles.storyTitle}>
          O lanche que reúne a galera
        </Text>
        <Text style={styles.storyText}>
          O André Lanches nasceu de uma ideia simples: fazer da pausa para o lanche um momento para reunir os amigos. O cardápio cresceu em torno dos clássicos da chapa, com batata, sucos e outras opções para completar o pedido.
        </Text>
      </View>

      <View style={[styles.details, width >= 720 && styles.detailsWide]}>
        <View style={styles.detail}>
          <Text accessibilityRole="header" style={styles.detailTitle}>Nossa missão</Text>
          <Text style={styles.detailText}>
            Servir lanches saborosos e facilitar cada pedido, da escolha no cardápio até a entrega em casa.
          </Text>
        </View>
        <View style={styles.detail}>
          <Text accessibilityRole="header" style={styles.detailTitle}>Nosso diferencial</Text>
          <Text style={styles.detailText}>
            Juntamos os clássicos da chapa, acompanhamentos e combos em um cardápio fácil de consultar. Na dúvida, você pode falar direto com a gente pelo telefone.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { gap: 18 },
  pageTitle: { color: colors.ink, fontSize: 34, fontFamily: fonts.heading },
  story: {
    gap: 14,
    padding: 24,
    borderRadius: 24,
    backgroundColor: colors.dark,
  },
  storyTitle: { color: colors.gold, fontSize: 29, fontWeight: '900' },
  storyText: { color: colors.white, fontSize: 16, lineHeight: 25, maxWidth: 640 },
  details: { gap: 14 },
  detailsWide: { flexDirection: 'row' },
  detail: {
    flex: 1,
    gap: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  detailTitle: { color: colors.accentDark, fontSize: 19, fontWeight: '800' },
  detailText: { color: colors.muted, fontSize: 15, lineHeight: 23 },
});
