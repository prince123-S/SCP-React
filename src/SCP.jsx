import React from "react";
import "./SCP.css";

export default function SCP({ scp }) {
  if (!scp) return null;

  return (
    <div className="scp-details">
      <h2>{scp.item}</h2>
      <p><strong>Class:</strong> {scp.class}</p>
      <p><strong>Description:</strong> {scp. description}</p>
      <p><strong>Containment:</strong> {scp.containment}</p>
    </div>
  );
}
