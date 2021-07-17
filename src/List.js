import './list.css';

const List = ({items,del}) => {
  return (
    <>
      {items.map((todo, i) => (
        <div key={i} id="todos">{todo} <button type="button" onClick={() => del(i)}>X</button></div>
      ))}
    </>
  );
};

export default List;
