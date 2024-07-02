import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostItemInfo() {
  const { currentItem } = useOutletContext();

  return (
    <section className="host-item-detail-info">
      <h4>
        Name: <span>{currentItem.name}</span>
      </h4>
      <h4>
        Category: <span>{currentItem.type}</span>
      </h4>
      <h4>
        Description: <span>{currentItem.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
