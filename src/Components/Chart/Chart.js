import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  //dataPoints được lấy hết bên dữ liệu
  //dataPoints lúc này là một mảng gồm label và value
  //đặt biến đưa tắt cả các giá trị vào
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //tìm ra con số lớn nhất

  return (
    <div className="chart">
      {/* chạy hết 12 tháng và đưa vào từng giá trị */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
