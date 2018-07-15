import React from "react";
import PropTypes from "prop-types";
import { setPropTypes } from "recompose";
import { TouchableOpacity } from "react-native";
import { Card, CardItem, H3, Text, Body } from "native-base";

import style from "./style";

const enhance = setPropTypes({
  onPress: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired
});

export default enhance(({ title, onPress, description }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={style.container}
  >
    <Card>
      <CardItem header>
        <H3>{title}</H3>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{description}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>Participantes</Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
));
