export function selectBook(book){
  //this is action creator, needs to return an action
  //which is an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
