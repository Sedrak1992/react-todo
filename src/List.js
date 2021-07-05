const List = ({ items }) => {
  return (
    <ul>
      {items.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
};

export default List;
