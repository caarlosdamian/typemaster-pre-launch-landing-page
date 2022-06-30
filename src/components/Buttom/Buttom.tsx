import { ButtomProps } from "../../interfaces";
import "./Buttom.scss";

export const Buttom = ({ classd, label }: ButtomProps) => {
  return <button className={`buttom ${classd}`}>{label}</button>;
};
