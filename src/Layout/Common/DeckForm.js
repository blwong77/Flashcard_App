import React from "react";

export default function DeckForm({formData, handleCancel, handleInput, handleSubmit}) {
  return (
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
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
