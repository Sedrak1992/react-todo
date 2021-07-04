const List = (props) =>{
  return(
      <ul>
         {props.items.map(todo =>(<li>{todo}</li>))}
      </ul>
  );
 };
 export default List