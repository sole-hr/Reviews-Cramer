import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";

const FlipArrow = props => {
  //console.log(props.expanded);
  if (props.expanded === false) {
    return (
      <div>
        <IconContext.Provider
          value={{
            color: "black",
            className: "global-class-name",
            size: "1.3em"
          }}
        >
          <div>
            <IoIosArrowDown />
          </div>
        </IconContext.Provider>
      </div>
    );
  } else {
    return (
      <div>
        <IconContext.Provider
          value={{
            color: "black",
            className: "global-class-name",
            size: "1.3em"
          }}
        >
          <div>
            <IoIosArrowUp />
          </div>
        </IconContext.Provider>
      </div>
    );
  }
};

export default FlipArrow;
window.FlipArrow = FlipArrow;
