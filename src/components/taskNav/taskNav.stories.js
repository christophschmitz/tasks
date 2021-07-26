import "./taskNav.css";
import TaskNav from "./taskNav.html";
import TaskNavActive from "./taskNavActive.html";

export default {
  title: "Components/TaskNav",
  parameters: { layout: "center" },
};

export const Tasknav = () => TaskNav;
export const TasknavA = () => TaskNavActive;
