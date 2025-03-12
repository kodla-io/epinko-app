import React from "react";

export const Thumb = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {/* {index + 1} */}
        <img src="https://placehold.co/300x200/000000/FFFFFF" alt="Example" />
      </button>
    </div>
  );
};
