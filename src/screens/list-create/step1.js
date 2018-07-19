import React from "react";
import { Platform, View } from "react-native";
import { Container, Text } from "native-base";
import { SearchBar } from "react-native-elements";
import { withHandlers, compose, lifecycle, withState } from "recompose";

import Header from "../../components/header/header";

const data = [
  1337,
  "janeway",
  {
    lots: "of",
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: ["gold!"]
              }
            }
          }
        }
      }
    }
  },
  [4, 2, "tree"]
];

const enhance = compose(
  withState("searchText", "setSearchText", ""),
  withHandlers({
    resetSearchText: ({ setSearchText }) => () => {
      setSearchText("");
    }
  })
);

const platform = Platform.OS;

export default enhance(({ setSearchText, resetSearchText, searchText }) => (
  <Container>
    <Header title="List Create" />
    <SearchBar
      lightTheme
      value={searchText}
      platform={platform}
      onCancel={resetSearchText}
      onChangeText={setSearchText}
      icon={{ type: "font-awesome", name: "search" }}
    />
    <View>
      <Text>{searchText}</Text>
    </View>
  </Container>
));
