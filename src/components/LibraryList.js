import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    console.log(this.props);

    return <View />;
  }
}

const mapStateToProps = state => {
  // whatever gets returned becomes props for LibraryList
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
