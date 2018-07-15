import React from "react";
import { setStatic } from "recompose";
import { FlatList } from "react-native";
import { Container, H1 } from "native-base";

import ListCard from "../../components/list-card/list-card";

const data = [
  {
    key: "a",
    title: "Supermercado",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    key: "b",
    title: "A fazeres",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  }
];

const enhance = setStatic("navigationOptions", () => ({
  title: "Home"
}));

export default enhance(({ navigation }) => (
  <Container>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListCard {...item} onPress={() => navigation.navigate("List")} />
      )}
    />
  </Container>
));
