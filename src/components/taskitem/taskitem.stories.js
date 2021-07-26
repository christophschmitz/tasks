import "./taskitem.css";
import Taskitem from "./taskitem.html";
import Taskitemdone from "./taskitemdone.html";

export default {
  title: "Components/Taskitem",
  parameters: { layout: "center" },
};

export const Taskformular = () => Taskitem;
export const Taskformulardone = () => Taskitemdone;
