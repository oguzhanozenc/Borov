import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPets } from "../../api"; // Assuming you have an API function to fetch pets

export default function Pets() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadPets() {
      setLoading(true);
      try {
        const data = await getPets(); // Call your API function to fetch pets
        setPets(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadPets();
  }, []);

  const displayedPets = typeFilter
    ? pets.filter((pet) => pet.type === typeFilter)
    : pets;

  const petElements = displayedPets.map((pet) => (
    <div key={pet.id} className="pet-tile">
      <Link
        to={`/${pet.id}`} // Assuming each pet has a unique ID for routing
        className="host-pet-link-wrapper"
        state={{
          search: location.search,
          type: typeFilter,
        }}
      >
        <img src={pet.imageUrl} alt={pet.name} />
        <div className="host-pet-info">
          <h3>{pet.name}</h3>
          <p>{pet.description}</p>
        </div>
        <i className={`pet-type ${pet.type} selected`}>{pet.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    const newSearchParams = new URLSearchParams(location.search);
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParams(newSearchParams.toString());
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="host-pets-list">
      <h1>Explore our available pets</h1>
      <div className="pet-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "dog")} // Example filter types (dog, cat, etc.)
          className={`pet-type dog ${typeFilter === "dog" ? "selected" : ""}`}
        >
          Dogs
        </button>
        <button
          onClick={() => handleFilterChange("type", "cat")}
          className={`pet-type cat ${typeFilter === "cat" ? "selected" : ""}`}
        >
          Cats
        </button>
        {/* Add more filter buttons for other types as needed */}
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="pet-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="pet-list">{petElements}</div>
    </div>
  );
}
