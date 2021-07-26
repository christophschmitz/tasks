import "./iconButton.css";
import iconButtonMenu from "./iconButton-menu.html";
import iconButtonNotification from "./iconButton-notification.html";

export default {
  title: "Components/IconButton",
  parameters: { layout: "center" },
};

export const MenuButton = () => iconButtonMenu;
export const BellButton = () => iconButtonNotification;
