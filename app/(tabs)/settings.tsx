import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ProductListing from "@/components/product-listing";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ProductListing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 100 },
});