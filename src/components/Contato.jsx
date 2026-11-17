import { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../theme';

const emptyForm = { name: '', contact: '', message: '' };
const fields = [
  { name: 'name', label: 'Nome', placeholder: 'Seu nome', autoCapitalize: 'words', autoComplete: 'name' },
  { name: 'contact', label: 'E-mail ou WhatsApp', placeholder: 'seu@email.com ou (11) 99999-9999', autoCapitalize: 'none' },
  { name: 'message', label: 'Mensagem', placeholder: 'Digite sua mensagem', autoCapitalize: 'sentences', multiline: true },
];

const confirmation = 'Mensagem recebida no app.';
const demoNote = 'Este formulário é demonstrativo. O envio é registrado apenas nesta tela.';

function isValidContact(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(?:\+?55\s*)?(?:\([1-9]\d\)|[1-9]\d)\s*\d{4,5}[- ]?\d{4}$/;

  return emailPattern.test(value) || phonePattern.test(value);
}

export default function Contato() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(name, value) {
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Informe seu nome.';
    if (!isValidContact(form.contact.trim())) {
      nextErrors.contact = 'Informe um e-mail válido ou WhatsApp com DDD.';
    }
    if (!form.message.trim()) nextErrors.message = 'Digite uma mensagem.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setSubmitted(false);
      return;
    }

    Keyboard.dismiss();
    setForm(emptyForm);
    setSubmitted(true);
    Alert.alert(confirmation, demoNote);
  }

  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.pageTitle}>Contato</Text>
      <Text style={styles.description}>Escreva uma dúvida, sugestão ou comentário.</Text>

      <View style={styles.form}>
        {fields.map(({ name, label, placeholder, autoCapitalize, autoComplete, multiline }) => (
          <View key={name} style={styles.field}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              accessibilityLabel={label}
              autoCapitalize={autoCapitalize}
              autoComplete={autoComplete}
              autoCorrect={name !== 'contact'}
              multiline={multiline}
              onChangeText={(value) => updateField(name, value)}
              placeholder={placeholder}
              placeholderTextColor={colors.muted}
              style={[styles.input, multiline && styles.messageInput, errors[name] && styles.invalidInput]}
              value={form[name]}
            />
            {errors[name] && (
              <Text accessibilityLiveRegion="polite" style={styles.error}>{errors[name]}</Text>
            )}
          </View>
        ))}

        <Text style={styles.note}>{demoNote}</Text>
        <TouchableOpacity accessibilityRole="button" onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Enviar mensagem</Text>
        </TouchableOpacity>

        {submitted && (
          <Text accessibilityRole="alert" accessibilityLiveRegion="polite" style={styles.success}>
            {confirmation}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { gap: 12, width: '100%', maxWidth: 640, alignSelf: 'center' },
  pageTitle: { color: colors.ink, fontSize: 34, fontFamily: fonts.heading },
  description: { color: colors.muted, fontSize: 16, lineHeight: 24 },
  form: {
    gap: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },
  field: { gap: 7 },
  label: { color: colors.ink, fontSize: 15, fontWeight: '700' },
  input: {
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    color: colors.ink,
    fontSize: 16,
  },
  messageInput: { minHeight: 115, textAlignVertical: 'top' },
  invalidInput: { borderColor: colors.accent },
  error: { color: colors.accentDark, fontSize: 14, lineHeight: 20 },
  note: { color: colors.muted, fontSize: 14, lineHeight: 20 },
  button: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.accent,
    borderRadius: 12,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: '800', textAlign: 'center' },
  success: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.pale,
    color: colors.ink,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
  },
});
