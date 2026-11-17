import Feather from '@expo/vector-icons/Feather';
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, contentWidth } from '../theme';

const telefone = process.env.EXPO_PUBLIC_TELEFONE_ENTREGA?.trim();

function avisar(titulo, mensagem) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensagem}`);
    return;
  }
  Alert.alert(titulo, mensagem);
}

async function ligar() {
  if (!telefone || !/^\+55[1-9]\d{9,10}$/.test(telefone)) {
    avisar('Telefone indisponível', 'O telefone de entrega ainda não foi configurado.');
    return;
  }

  try {
    await Linking.openURL(`tel:${telefone}`);
  } catch {
    avisar('Não foi possível ligar', 'Abra o discador do aparelho para fazer o pedido.');
  }
}

export default function EntregaFlutuante({ compacto }) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={[styles.area, compacto && styles.areaCompacta, { bottom: bottom + (compacto ? 12 : 16) }]}
    >
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Pedir por telefone"
        accessibilityHint="Abre o discador quando há um telefone configurado"
        onPress={ligar}
        style={styles.button}
      >
        <View style={styles.icon}>
          <Feather name="phone" color={colors.accentDark} size={18} />
        </View>
        <View>
          <Text style={styles.label}>Pedir por telefone</Text>
          <Text style={styles.detail}>Entrega em casa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    position: 'absolute', alignSelf: 'center', width: '100%',
    maxWidth: contentWidth + 48, paddingHorizontal: 24, alignItems: 'flex-end',
  },
  areaCompacta: { paddingHorizontal: 16 },
  button: {
    minHeight: 58, paddingHorizontal: 13, paddingVertical: 8, borderRadius: 15,
    backgroundColor: colors.accent, flexDirection: 'row', alignItems: 'center', gap: 10,
    ...Platform.select({
      web: { boxShadow: '0 8px 24px rgba(89, 37, 21, 0.28)' },
      default: { elevation: 7, shadowColor: colors.accentDark, shadowOpacity: 0.24, shadowOffset: { width: 0, height: 4 }, shadowRadius: 9 },
    }),
  },
  icon: {
    width: 34, height: 34, borderRadius: 10, backgroundColor: colors.gold,
    alignItems: 'center', justifyContent: 'center',
  },
  label: { color: colors.white, fontWeight: '800', fontSize: 14 },
  detail: { color: colors.white, fontSize: 11, marginTop: 1 },
});
