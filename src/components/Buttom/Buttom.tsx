import { ButtomProps } from "../../interfaces";
import "./Buttom.scss";

export const Buttom = ({ classd }: ButtomProps) => {
  return <button className={`buttom ${classd}`}>Buttom</button>;
};
