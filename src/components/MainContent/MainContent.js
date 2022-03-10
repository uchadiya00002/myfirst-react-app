import react from "react";
import "./MainContent.style.css";

const MainContent = () => (
  <main className="main">
    <h1 className="main-title">Fun Facts about React</h1>
    <ul className="main-list_items">
      <li className="main-list_item">Was first released in 2013</li>
      <li className="main-list_item">Was originally created by Jordan Walke</li>
      <li className="main-list_item">Has well over 100k stars on Github</li>
      <li className="main-list_item">Is maintained by facebook</li>
      <li className="main-list_item">
        Powers thousands of enterprise apps , including mobile apps
      </li>
    </ul>
  </main>
);

export default MainContent;
