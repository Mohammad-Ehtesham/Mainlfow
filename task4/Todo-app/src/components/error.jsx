function Welcometodo({ AvailableItem }) {
  return (
    <>
      <div className="container text-center">
        {AvailableItem.length == 0 && <h2>Add your todo here</h2>}
      </div>
    </>
  );
}

export default Welcometodo;
