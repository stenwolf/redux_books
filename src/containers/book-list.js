import React, {Component} from 'react'
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
      return this.props.books.map((book) =>{
        return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className='list-group-item'>
              {book.title}
          </li>
        );
      });
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //whatever returned will show up as props inside BookList
  //return books because useing this.props.books above
  return{
    books: state.books
  };
}

//anything returned will be props on the BookList container
function mapDispatchToProps(dispatch){
  //whenever selectbook is called, result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


//currying
//basically connect(mapStateToProps) returns a function f
//then call f(BookList)
//promote BookList from component to a container.
//It needs to knwo about this new dispatch method, selectBook,
//Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
