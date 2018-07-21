import React from "react";
import { Platform, FlatList } from "react-native";
import { Container, Button, Text } from "native-base";
import { compose, withStateHandlers } from "recompose";
import { SearchBar, ListItem } from "react-native-elements";

import Navigation from "../../utils/navigation";
import Header from "../../components/header/header";

const data = [
  { title: "teste", subtitle: "testee", key: "a" },
  { title: "teste", subtitle: "testee", key: "b" }
];

const platform = Platform.OS;

const enhance = compose(
  withStateHandlers(
    { searchText: "" },
    {
      setSearchText: () => searchText => ({ searchText }),
      resetSearchText: () => () => ({ searchText: "" })
    }
  )
);
export default enhance(
  ({ searchText, navigation, setSearchText, resetSearchText }) => (
    <Container>
      <Header
        hasBack
        title="Step2"
        right={() => (
          <Button transparent onPress={() => navigation.navigate("Step2")}>
            <Text>Concluido</Text>
          </Button>
        )}
      />
      <SearchBar
        lightTheme
        value={searchText}
        platform={platform}
        onCancel={resetSearchText}
        onChangeText={setSearchText}
        icon={{ type: "font-awesome", name: "search" }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem bottomDivider {...item} />}
      />
    </Container>
  )
);
