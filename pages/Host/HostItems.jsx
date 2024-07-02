import React from "react";
import { Link } from "react-router-dom";
import { getHostItems } from "../../api";
import "./HostItems.css";

export default function HostItems() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadItems() {
      setLoading(true);
      try {
        const data = await getHostItems();
        setItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  const hostItemsEls = items.map((item) => (
    <Link to={item.id} key={item.id} className="host-item-link-wrapper">
      <div className="host-item-single" key={item.id}>
        <img src={item.imageUrl} alt={`Photo of ${item.name}`} />
        <div className="host-item-info">
          <h3>{item.name}</h3>
          <p>${item.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section>
      <h1 className="host-items-title">Your listed items</h1>
      <div className="host-items-list">
        {items.length > 0 ? (
          <section>{hostItemsEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
