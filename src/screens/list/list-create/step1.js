import React from "react";
import { Container, Button, Text } from "native-base";
import { Platform, FlatList, View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import { compose, withState, withHandlers } from "recompose";

import Navigation from "../../../utils/navigation";
import Header from "../../../components/header/header";

const data = [
  { title: "testaae", subtitle: "testee", key: "a" },
  { title: "tesaste", subtitle: "testee", key: "b" }
];

const platform = Platform.OS;

const enhance = compose(
  withState("data", "setData", data),
  withState("selecteds", "setSelecteds", []),
  withState("searchText", "setSearchText", ""),
  withHandlers({
    select: ({ data, setSelecteds, selecteds }) => key => {
      const isSelected = selecteds.some(selected => selected.key === key);
      if (isSelected) return;

      const select = data.find(item => item.key === key);
      if (select) {
        setSelecteds(selecteds.concat([select]));
      }
    },
    resetSearchText: ({ setSearchText }) => () => setSearchText("")
  })
);

export default enhance(
  ({
    data,
    select,
    selecteds,
    searchText,
    navigation,
    setSearchText,
    resetSearchText
  }) => (
    <Container>
      <Header
        title="List Create"
        left={() => (
          <Button transparent onPress={() => Navigation.goBack()}>
            <Text>Cancelar</Text>
          </Button>
        )}
        right={() => (
          <Button transparent onPress={() => navigation.navigate("Step2")}>
            <Text>Seguinte</Text>
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
      <View>
        <Text>{selecteds.map(selected => selected.title).toString()}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => select(item.key)} {...item} />
        )}
      />
    </Container>
  )
);
