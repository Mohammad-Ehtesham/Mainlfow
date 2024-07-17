const HandleButton = ({ Buttonclick }) => {
  const ButtonNames = [
    "C",
    "x",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="buttons">
        {ButtonNames.map((button) => (
          <button className="button" onClick={() => Buttonclick(button)}>
            {" "}
            {button}
          </button>
        ))}
      </div>
    </>
  );
};

export default HandleButton;
