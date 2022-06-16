import React, { Component } from "react";

const CustomButton = (props) => {
  return (
    <>
      <button className="btn" onClick={props.edit}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          height={15}
          width={15}
        />
      </button>
      <button className="btn" onClick={props.Delete}>
        <img
          src="https://www.svgrepo.com/show/21045/delete-button.svg"
          height={15}
          width={15}
        />
      </button>
    </>
  );
};

export default CustomButton;
