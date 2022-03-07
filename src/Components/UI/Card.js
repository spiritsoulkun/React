import React from "react";

const Card = (props) => {
  // nếu muốn cả 2 file CSS gộp lại ta làm thế này
  const classes = "card " + props.className;
  // props.children chính là lấy những nội dung con bên trong đó
  return <div className={classes}>{props.children}</div>;
};

export default Card;
