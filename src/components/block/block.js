import React from "react";
import PropTypes from "prop-types";
import { Text, Icon } from "native-base";
import { View, TouchableOpacity } from "react-native";
import { setPropTypes, compose, defaultProps } from "recompose";

import style from "./style";

const enhance = compose(
  setPropTypes({
    onPress: PropTypes.func,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  defaultProps({
    icon: "star"
  })
);

export default enhance(({ onPress, text, icon }) => (
  <View style={style.container}>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={style.touchable}
    >
      <View style={style.content}>
        <View style={style.iconContainer}>
          <Icon name={icon} style={style.icon} />
        </View>
        <View>
          <Text style={style.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
));
