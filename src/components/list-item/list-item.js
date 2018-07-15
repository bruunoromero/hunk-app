import React from "react";
import PropTypes from "prop-types";
import { setPropTypes } from "recompose";
import { ListItem, CheckBox, Body, Text } from "native-base";

const enhance = setPropTypes({
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired
});

export default enhance(({ text, onPress }) => (
  <ListItem onPress={onPress}>
    <CheckBox checked />
    <Body>
      <Text>{text}</Text>
    </Body>
  </ListItem>
));
