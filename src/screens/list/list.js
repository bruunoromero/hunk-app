import React from "react";
import { FlatList } from "react-native";
import { Container, CheckBox, Text, Body } from "native-base";

import ListItem from "../../components/list-item/list-item";

const data = [{ key: "a", text: "Ola" }, { key: "b", text: "Mundo" }];

export default () => (
  <Container>
    <FlatList data={data} renderItem={({ item }) => <ListItem {...item} />} />
  </Container>
);
