import React from "react";
import { FlatList } from "react-native";
import { Container, H1, Button, Icon } from "native-base";
import { setStatic, compose, withHandlers } from "recompose";

import Header from "../../../components/header/header";
import ListCard from "../../../components/list-card/list-card";

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

const enhance = withHandlers({
  goToList: ({ navigation }) => () => {
    navigation.navigate("List");
  },
  goToListCreate: ({ navigation }) => () => {
    navigation.navigate("ListCreate");
  }
});

export default enhance(({ goToListCreate, goToList }) => (
  <Container>
    <Header
      title="Home"
      right={() => (
        <Button transparent onPress={goToListCreate}>
          <Icon name="add" style={{ fontSize: 35 }} />
        </Button>
      )}
    />
    <FlatList
      data={data}
      renderItem={({ item }) => <ListCard {...item} onPress={goToList} />}
    />
  </Container>
));
