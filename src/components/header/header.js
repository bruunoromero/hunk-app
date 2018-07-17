import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import { compose, setPropTypes, defaultProps, withHandlers } from "recompose";
import { Header, Body, Title, Left, Right, Button, Icon } from "native-base";

const enhance = compose(
  setPropTypes({
    left: PropTypes.node,
    right: PropTypes.func,
    hasBack: PropTypes.bool,
    title: PropTypes.string.isRequired,
    backType: PropTypes.oneOf(["arrow", "close"])
  }),
  defaultProps({
    backType: "arrow"
  }),
  withNavigation,
  withHandlers({
    back: ({ navigation }) => () => {
      navigation.pop();
    }
  })
);

export default enhance(
  ({
    back,
    title,
    hasBack,
    backType,
    left: LeftComponent,
    right: RightComponent
  }) => (
    <Header>
      <Left>
        {hasBack && (
          <Button onPress={back} transparent>
            <Icon name={backType === "arrow" ? "arrow-back" : "close"} />
          </Button>
        )}
        {LeftComponent && <LeftComponent />}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>{RightComponent && <RightComponent />}</Right>
    </Header>
  )
);
