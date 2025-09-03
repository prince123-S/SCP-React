import React from "react";
import "./Menu.css";

export default function Menu({ scps, onSelect, selectedItem }) {
  return (
    <aside className="menu">
      <ul>
        {scps.map((scp) => (
          <li
            key={scp.scp_id}
            className={selectedItem === scp.scp_id ? "selected" : ""}
            onClick={() => onSelect(scp)}
          >
            {scp.item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
