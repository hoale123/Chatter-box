import { useState, useEffect } from "react";
import React from 'react';
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      fetch("/restaurants")
        .then((r) => r.json())
        .then(setRestaurants);
    }, []);
  
    function handleAddRestaurants(addedRestaurant) {
        setRestaurants((restaurants) => [...restaurants, addedRestaurant]);
    }
  
 
    function handleDeleteRestaurant(deletedRestaurant) {
        setRestaurants((restaurants) =>
        restaurants.filter((restaurant) => restaurant.id !== deletedRestaurant.id)
      );
    }
  return(
    <>
      <main>
        <NewRestaurantForm onAdd={handleAddRestaurants} />
        <section className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            onDeleteRestaurant={handleDeleteRestaurant}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default RestaurantContainer;
