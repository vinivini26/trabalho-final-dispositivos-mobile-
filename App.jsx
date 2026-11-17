import { Fraunces_700Bold } from '@expo-google-fonts/fraunces/700Bold';
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, useWindowDimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BannerPromocao from './src/components/BannerPromocao';
import Contato from './src/components/Contato';
import EntregaFlutuante from './src/components/EntregaFlutuante';
import Header from './src/components/Header';
import ListaProdutos from './src/components/ListaProdutos';
import SobreNos from './src/components/SobreNos';
import { promocao } from './src/data/cardapio';
import { colors, contentWidth } from './src/theme';

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('lanches');
  const [fontsLoaded, fontError] = useFonts({ Fraunces_700Bold, ...Feather.font });
  const scroll = useRef(null);
  const posicaoCardapio = useRef(0);
  const { width } = useWindowDimensions();
  const compacto = width < 600;
  const colunas = width >= 960 ? 3 : 2;

  function navegar(tela) {
    scroll.current?.scrollTo({ y: 0, animated: false });
    setTelaAtiva(tela);
  }

  function verCardapio() {
    scroll.current?.scrollTo({ y: Math.max(0, posicaoCardapio.current - 12), animated: true });
  }

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.accent} accessibilityLabel="Carregando André Lanches" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <Header telaAtiva={telaAtiva} onNavigate={navegar} compacto={compacto} />
        <KeyboardAvoidingView style={styles.body} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            key={telaAtiva}
            ref={scroll}
            style={styles.scroll}
            contentContainerStyle={[styles.scrollContent, compacto && styles.scrollCompacto]}
            keyboardShouldPersistTaps="handled"
          >
            {telaAtiva === 'lanches' && (
              <View style={styles.menu}>
                <BannerPromocao {...promocao} compacto={width < 720} onVerCardapio={verCardapio} />
                <View onLayout={({ nativeEvent }) => { posicaoCardapio.current = nativeEvent.layout.y; }}>
                  <ListaProdutos compacto={compacto} colunas={colunas} />
                </View>
              </View>
            )}
            {telaAtiva === 'sobre' && <SobreNos />}
            {telaAtiva === 'contato' && <Contato />}
          </ScrollView>
        </KeyboardAvoidingView>
        <EntregaFlutuante compacto={compacto} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.surface },
  body: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  scrollContent: {
    width: '100%', maxWidth: contentWidth + 48, alignSelf: 'center',
    paddingHorizontal: 24, paddingTop: 28, paddingBottom: 108,
  },
  scrollCompacto: { paddingHorizontal: 16, paddingTop: 15, paddingBottom: 98 },
  menu: { gap: 29 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
});
