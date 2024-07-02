import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostItemPricing() {
  const { currentItem } = useOutletContext();

  return (
    <h3 className="host-item-price">
      ${currentItem.price}
      <span>/day</span>
    </h3>
  );
}
