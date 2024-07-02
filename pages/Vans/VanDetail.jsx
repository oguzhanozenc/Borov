import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getPet } from "../../api"; // Assuming you have an API function to fetch pet details

export default function PetDetail() {
  const [pet, setPet] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const location = useLocation();

  React.useEffect(() => {
    async function loadPet() {
      setLoading(true);
      try {
        const data = await getPet(id); // Call your API function to fetch pet details
        setPet(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadPet();
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
    <div className="pet-detail-container">
      <Link to={`..${search}`} className="back-button">
        &larr; <span>Back to {type} pets</span>
      </Link>

      {pet && (
        <div className="pet-detail">
          <img src={pet.imageUrl} alt={pet.name} />
          <i className={`pet-type ${pet.type} selected`}>{pet.type}</i>
          <h2>{pet.name}</h2>
          <p className="pet-description">{pet.description}</p>
          <button className="link-button">Adopt this pet</button>
        </div>
      )}
    </div>
  );
}
