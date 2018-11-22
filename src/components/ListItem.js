import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  //Note: Android need UI manager for ANIMATION to work.
  UIManager
} from "react-native";
import { CardSection } from "./common";

import { connect } from "react-redux";
import { selectLibrary } from "../reducers/SelectionReducer";

//Note: Android need UI manager for ANIMATION to work.
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  // ANIMATION
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    // Note: (Better Practice) Precalculation of props passed down to components.
    // if (this.props.library.item.id === this.props.selectedLibraryId) {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.log(this.props);
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // return { selectedLibraryId: state.selectedLibraryId };

  // ownProps is equal to this.props inside of the component
  // so any props that we pass into ListItem will show up as ownProps.
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);
