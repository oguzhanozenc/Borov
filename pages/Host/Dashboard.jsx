import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostItems } from "../../api";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderItemElements(items) {
    const hostItemsEls = items.map((item) => (
      <div className="host-item-single" key={item.id}>
        <img src={item.imageUrl} alt={`Photo of ${item.name}`} />
        <div className="host-item-info">
          <h3>{item.name}</h3>
          <p>${item.price}/day</p>
        </div>
        <Link to={`items/${item.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-items-list">
        <section>{hostItemsEls}</section>
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-items">
        <div className="top">
          <h2>Your listed items</h2>
          <Link to="items">View all</Link>
        </div>
        {loading && !items ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderItemElements(items)}</>
        )}
      </section>
    </>
  );
}
