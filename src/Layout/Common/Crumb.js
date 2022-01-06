import React from "react";
import { Link } from "react-router-dom";

export default function Crumb({ destination, name, isActive = false }) {
  return (
    <li className={isActive ? "breadcrumb-item active" : "breadcrumb-item"}>
      {isActive ? name : <Link to={destination}>{name}</Link> }
    </li>
  );
}
