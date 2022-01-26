import React from "react";

export default function CardForm({
  isEdit = false,
  formDataCard,
  handleDone,
  handleInput,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Front</p>
        <textarea
          id="front"
          name="front"
          placeholder="Front side of card"
          onChange={handleInput}
          value={formDataCard.front}
        />
        <p>Back</p>
        <textarea
          id="back"
          name="back"
          placeholder="Back side of card"
          onChange={handleInput}
          value={formDataCard.back}
        />
      </div>
      <button type="btn" className="btn btn-secondary" onClick={handleDone}>
        {isEdit ? "Cancel" : "Done"}
      </button>
      <button type="submit" className="btn btn-primary">
        {isEdit ? "Submit" : "Save"}
      </button>
    </form>
  );
}
