import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    // console.log(this.props);

    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        // need key similar to classic mapping of list method.
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  // whatever gets returned becomes props for LibraryList
  // console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
