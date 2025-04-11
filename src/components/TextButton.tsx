import { StyleSheet, Pressable, Text } from "react-native";

type TextButtonProps = {
  text: string;
  onPress: () => void;
};

export default function TextButton({ text, onPress }: TextButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 16,
    fontWeight: "500",
  },
});
