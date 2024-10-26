import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollViewComponent,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

export default function ProductListing() {
  const [products, setProducts] = useState<null | any[]>(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setProducts(json);
    }
    fetchProducts();
  }, []);

  return (
    <FlatList
      data={products}
      ItemSeparatorComponent={() => {
        return <View style={{ borderWidth: 1, borderColor: "red" }}></View>;
      }}
      renderItem={({ item }: any) => {

        return (
          <View style={Styles.productItem}>
            <View style={Styles.productImage}>
              <Text>Image</Text>
            </View>
            <View style={Styles.productContent}>
              <Text>{item.title}</Text>
              <Text>$999</Text>
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <Button title="Buy now" onPress={()=>{
                //router.navigate(`/products/${item.userId}`)
              }} />
            </View>
          </View>
        );
      }}
    />
  );
}

const Styles = StyleSheet.create({
  productItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
  productImage: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 2,
    borderRadius: 6,
  },
  productContent: {
    margin: 10,
  },
});