import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getItem } from "../../api";

export default function ItemDetail() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function loadItem() {
      setLoading(true);
      try {
        const data = await getItem(id);
        setItem(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadItem();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="item-detail-container">
      <Link to={`..${search}`} className="back-button">
        &larr; <span>Back to {type} products</span>
      </Link>

      {item && (
        <div className="item-detail">
          <img src={item.imageUrl} alt={item.name} />
          <i className={`item-type ${item.type}`}>{item.type}</i>
          <h2>{item.name}</h2>
          <p className="item-price">
            <span>${item.price}</span>/day
          </p>
          <p>{item.description}</p>
          <button className="link-button">Rent this product</button>
        </div>
      )}
    </div>
  );
}
