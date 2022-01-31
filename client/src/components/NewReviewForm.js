import react, {useState} from "react"


function NewReviewForm(){
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [ name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, description, image, location };

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newListing) => {
        onAddListing(newListing);
      });
  }




    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="image">image:</label>
          <input
            type="text"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="location">location:</label>
          <input
            type="text"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Add Review</button>
        </form>
      );
}

export default NewReviewForm