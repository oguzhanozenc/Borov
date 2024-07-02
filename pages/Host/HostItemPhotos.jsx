import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostItemPhotos() {
  const { currentItem } = useOutletContext();

  return <img src={currentItem.imageUrl} className="host-item-detail-image" />;
}
