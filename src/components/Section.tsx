import { StyleSheet, View, Text } from "react-native";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
