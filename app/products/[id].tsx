import { View, Text } from "react-native";
import { useLocalSearchParams  } from "expo-router"

export default function ProductPage() {

  const params = useLocalSearchParams();

  console.log(params);

  return (
    <View>
      <Text>Product Page</Text>
    </View>
  );
}