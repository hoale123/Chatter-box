import React, {useState} from "react"


function ReviewCard(review) {
  const [favorite, setFavorite] = useState(false)
  const { id, name,  image, description, location } = review;

  function handleDeleteClick() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }



    return (
        <li className="card">
          <div className="image">
            <img src={image} alt={description} />
          </div>
          <div name={name}/>
          <div className="details">
            {isFavorited ? (
              <button
                onClick={() => setFavorite(false)}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button
                onClick={() => setFavorite(true)}
                className="emoji-button favorite"
              >
                ☆
              </button>
            )}
            <strong>{description}</strong>
            <span> · {location}</span>
            <button onClick={handleDeleteClick} className="emoji-button delete">
              🗑
            </button>
          </div>
        </li>
      );
}

export default ReviewCard;