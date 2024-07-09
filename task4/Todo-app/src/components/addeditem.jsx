function AddedItem({ ItemName, ItemDate, handledelete }) {
  return (
    <>
      <div className="container text-center">
        <div className={`row align-items-start kg-row`}>
          <div className="col add">{ItemName}</div>
          <div className="col add">{ItemDate}</div>
          <div className="col right">
            <button
              className="btn btn-danger"
              onClick={() => handledelete(ItemName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddedItem;
