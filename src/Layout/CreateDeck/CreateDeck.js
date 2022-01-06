import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateDeck() {
  const INITIAL_FORM_DATA = {
    name: "",
    description: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <>
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Deck Name"
            onChange={handleInput}
            value={formData.name}
          />
          <p>Description</p>
          <textarea
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            onChange={handleInput}
            value={formData.description}
          />
        </div>
        <button
          type="btn"
          className="btn btn-secondary"
          onClick={() => history.push("/")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
