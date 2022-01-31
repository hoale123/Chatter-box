import { useState } from "react";
// import { Form,TextArea, Button } from "semantic-ui-react";
const initialState = {
  name: "",
  image: "",
  location: "",
  description: "",
};
function PostForm({ setPostArray, user }) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [location, setLocation] = useState("");
  // const [description, setDescription] = useState("");
  const [formData, setFormData] = useState(initialState);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

// console.log("add google login and restaurant")
function handleSubmit(e) {
  e.preventDefault();
  fetch("/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((newRestaurant) => {
      setFormData(initialState);
      setPostArray((prevPosts) => [newRestaurant, ...prevPosts]);
    });
}
  return (
    <div className="card">
      <h2>New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title: </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;