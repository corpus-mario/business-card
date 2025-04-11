import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

type ProjectCardProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function ProjectCard({ name, image }: ProjectCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  image: {
    height: 140,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  name: {
    color: "grey",
  },
});
