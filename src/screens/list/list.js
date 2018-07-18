import React from "react";
import { withHandlers } from "recompose";
import { FlatList } from "react-native";
import { Container } from "native-base";

import Block from "../../components/block/block";
import Header from "../../components/header/header";
import ListItem from "../../components/list-item/list-item";

const data = [{ key: "a", text: "Ola" }, { key: "b", text: "Mundo" }];

const enhance = withHandlers({
  goToItemCreate: ({ navigation }) => () => {
    navigation.navigate("ItemCreate");
  }
});

export default enhance(({ goToItemCreate }) => (
  <Container>
    <Header title="List" hasBack />
    <FlatList
      data={data}
      ListHeaderComponent={() => (
        <Block text="Add Item" onPress={goToItemCreate} />
      )}
      renderItem={({ item }) => <ListItem {...item} />}
    />
  </Container>
));
