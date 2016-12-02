import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){

    //check if book is null
    if(!this.props.book){
      return <div>Select a book to start</div>;
    }

    return(
        <div>
          <h3>Book Detail for {this.props.book.title}</h3>
          <div>Pages: {this.props.book.pages}</div>          
        </div>
    );
  };

}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}
 export default connect(mapStateToProps)(BookDetail);
