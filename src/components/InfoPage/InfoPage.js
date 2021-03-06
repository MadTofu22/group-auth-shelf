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

  state= {
    image_url: '',
    shelfItem: ''
  }

  componentDidMount() {
    this.getShelfItems();
  }

  getShelfItems = () => {
    this.props.dispatch({type: 'FETCH_SHELF_ITEMS'});
  }

  handleChange = (event, value) => {
    console.log('add new item')
    this.setState({
      ...this.state ,
      [value]: event.target.value,
      
    })
    console.log(this.state)
  }
  
  onClickSubmit = () => {
    this.props.dispatch({type: 'ADD_SHELF_ITEMS',
    payload: this.state});
  }

onClickDelete = (id) => {
  this.props.dispatch({type: 'DELETE_SHELF_ITEM', payload: id });
}

  render() {
    return (
      <div>
        <p>Info Page</p>
        {JSON.stringify(this.props.reduxState.shelf.shelfItems)}
        <input placeholder='shelf item' onChange={(event) => this.handleChange(event, 'shelfItem')}/>
        <input placeholder='image_url' onChange={(event) => this.handleChange(event, 'image_url')}/>
        <button onClick={this.onClickSubmit}>Submit</button>
        <table>
          <tr><th>Image</th><th>Shelf Item</th><th>Delete</th></tr>
          {this.props.reduxState.shelf.shelfItems.map((shelfItem) => {
            return <tr key={shelfItem.id}>
                      <td><img alt={shelfItem.description} src={shelfItem.image_url}></img></td>
                      <td>{shelfItem.description}</td>
                      <td><button onClick={() => this.onClickDelete(shelfItem.id)}>Delete</button></td>
                  </tr>
          })}
          
        </table>
      </div>
    )
  }
}

const reduxOnProps = (reduxState) => ({reduxState});
export default connect(reduxOnProps)(InfoPage);
