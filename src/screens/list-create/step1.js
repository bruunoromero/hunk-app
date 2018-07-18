import React from "react";
import {
  Text,
  Icon,
  Item,
  Input,
  Header,
  Button,
  Container
} from "native-base";

export default () => (
  <Container>
    <Item>
      <Icon name="ios-search" />
      <Input placeholder="Search" />
      <Icon name="ios-people" />
    </Item>
    <Button transparent>
      <Text>Search</Text>
    </Button>
  </Container>
);
