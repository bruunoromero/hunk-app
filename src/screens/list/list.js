import React from "react";
import { FlatList } from "react-native";
import { Container } from "native-base";

import Header from "../../components/header/header";
import ListItem from "../../components/list-item/list-item";

const data = [{ key: "a", text: "Ola" }, { key: "b", text: "Mundo" }];

export default () => (
  <Container>
    <Header title="List" hasBack />
    <FlatList data={data} renderItem={({ item }) => <ListItem {...item} />} />
  </Container>
);
