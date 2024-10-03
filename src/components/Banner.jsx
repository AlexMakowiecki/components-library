import Badge from "./Badge"
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { HiExclamation, HiInformationCircle } from "react-icons/hi";

export default function Banner({type, title, children, ...rest}){
  type = type.toLowerCase()
  const icon = (type === "success") ? <FaCircleCheck className="success-icon banner__icon"/>
             : (type === "warning") ? <HiExclamation className="warning-icon banner__icon"/>
             : (type === "error") ? <FaCircleXmark className="error-icon banner__icon"/>
             : <HiInformationCircle className="info-icon banner__icon"/>
  return (
    <div className={`banner banner--${type}`} {...rest}>
      { icon }
      <h3 className="banner__title">{title}</h3>
      { children }
    </div>
  )
}