import ReactDOM from "react-dom"; // Tạo thư viện ReactDom
// Index sẽ lấy file CSS
import "./index.css";
// Index sẽ lấy tất cả dữ liệu từ App.js
import App from "./App";
//Liên kết giữa id của <div> trong <body> file HTML với file Components App
ReactDOM.render(<App />, document.getElementById("root"));
