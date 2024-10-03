import React from "react"

export default function Badge({color = "gray", type = "square", children}){
    return (
        <div className={`badge ${color.toLowerCase()} ${type.toLowerCase()}`}>
            {children || "Example"}
        </div>
    )
}