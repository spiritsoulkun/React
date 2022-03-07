import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  //Cứ mỗi vòng lặp bên Chart sẽ chạy 1 cái ChartBar
  //đặt biến cho css
  let barFillHeight = "0%";

  //Nếu tồn tại giá trị lớn nhất và so sánh nó = 0
  if (props.maxValue > 0) {
    //Công thức sẽ được tính bằng cách ví dụ:
    //Tháng 3 là lớn nhất (được tính bên Chart) vậy tháng 6 có giá trị bằng cách
    //value 6/value 3 * 100
    //Tính phần trăm giá trị đó và lưu vào biến để cho css nên mới thêm + "%"
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          //Giá trị của tháng 6 được thể hiện ở đây
          //Còn tháng 3 là 100%
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
