import { HiOutlineCloudUpload } from "react-icons/hi";
import React from "react"

export default function Card({ icon = <HiOutlineCloudUpload className="card__icon" />, iconBackgroundColor = "#3F75FE", children, ...rest }) {
  const finalIcon = React.cloneElement(icon, { className: `${icon.props.className || ""} card__icon`, })
  return (
    <div className="card" {...rest}>
      <div className="card__icon-container" style={{ backgroundColor: iconBackgroundColor }}>
        { finalIcon }
      </div>
      { children }
    </div>
  )
}