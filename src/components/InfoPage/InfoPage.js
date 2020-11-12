import React, {Component} from 'react';
import {connect} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>
//       Shelf Page
//     </p>
//     
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:

class InfoPage extends React.Component {

  componentDidMount() {
    this.getShelfItems();
  }

  getShelfItems = () => {
    this.props.dispatch({type: 'FETCH_SHELF_ITEMS'});
  }

  render() {
    return (
      <div>
        <p>Info Page</p>
        {JSON.stringify(this.props.reduxState.shelf.shelfItems)}
      </div>
    )
  }
}

const reduxOnProps = (reduxState) => ({reduxState});
export default connect(reduxOnProps)(InfoPage);
