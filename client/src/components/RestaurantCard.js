
function RestaurantCard({ restaurant, onDeleteRestaurant }) {
  const { id, image, name, description,location } = restaurant;

  function handleDeleteRestaurant() {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteRestaurant(restaurant);
      }
    });
  }

  return (
    <div className="restaurant-item card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Location: <em>{location}</em>
        </p>
        <p>
          <button onClick={handleDeleteRestaurant}>Delete Restaurant</button>
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
