import { useState,useEffect } from "react";
import {
  Form,
  Button,
  TextArea,
  Header,
  Image,
} from "semantic-ui-react";
function Post({
  user,
  id,
  restaurantDescription,
  restaurantName,
  restaurantImage,
  restaurantLocation,
  username,
  avatar,
  date,
  updatedDate,
  createdAt,
  updatedAt,
  postArray,
  setPostArray
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [updatedText, setUpdatedText] = useState(restaurantDescription);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  
  function handleRemove() {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    const postsToDisplay = postArray.filter((post) => {
      console.log(post.id, id);
      if (post.id === id) return false;
      else return true;
    });
    setPostArray(postsToDisplay);
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch(`/restaurants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: updatedText,
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => handleUpdatePost(updatedPost));
    setIsClicked(!isClicked);
  }

  
  function handleUpdatePost(updatedPost) {
    const updatedPostsArray = postArray.map((post) => {
      return post.id === updatedPost.id ? updatedPost : post;
    });
    setPostArray(updatedPostsArray);
  }

  function handleEditClick(e) {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }

  function handleInputChange(event) {
    setUpdatedText(event.target.value);
  }

  return (
    <>
      <div
        className="post"
        style={{
          justifyContent: "center",
          padding: 5,
          border: "2px solid gray",
        }}
      >
      {user.username === username ? (
        <label>
          Owner
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </label>
        ) : null}

        {!checked? (
          <>
          <Image
          src={restaurantImage} 
          alt="user restaurantImage"
          style={{ maxWidth: 250,   marginLeft:"auto",
          marginRight:"auto" }}
          />
        <Header as="h3" style={{fontWeight:"lighter"}}>Restaurant Name: {restaurantName}</Header>
        <Header as="h3" style={{fontWeight:"lighter"}}>Location: {restaurantLocation}</Header>
        <Header as="h3" style={{fontWeight:"lighter"}}>Owner: {username}</Header>
        <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Posted: {date}</Header>
        <Header as="h3" style={{fontWeight:"lighter"}}>Description: {restaurantDescription}</Header>
          </>
        ): 
        <>
        <Image
          src={avatar} 
          alt="user avatar"
          style={{ maxWidth: 250,   marginLeft:"auto",
          marginRight:"auto" }}
          />  
        <Header as="h3" style={{fontWeight:"lighter"}}>Username: {username}</Header>
        {updatedAt === createdAt ? (
          <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Posted: {date}</Header>
          ) : (
            <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Updated: {updatedDate}</Header>
            )}
        {!isClicked ? (
          <p style={{fontWeight:"lighter", fontSize: "20px", marginLeft:"auto", marginRight:"auto",marginBottom:"0px",paddingLeft:"100px", paddingRight:"100px" }}>{restaurantDescription}</p>
          ) : (
            <Form onSubmit={handleEdit} style={{textAlign: "left", marginTop:"20px", marginLeft:"auto",
            marginRight:"auto", paddingLeft:"150px",
            paddingRight:"150px" }}>
            <Form.Field
            label="Update Post:"
            style={{fontWeight:"lighter", fontSize: "20px"}}
            onChange={handleInputChange} 
            type="text" 
            control={TextArea}
            value={updatedText}
            
            />
             <Button>Update</Button>
          </Form>
          )}
          {user.username === username ? (
            <>
            <Button
              onClick={handleEditClick}
              className={!isClicked ? "edit" : "hidden"}
              >
              Edit
            </Button>
            <Button onClick={handleRemove} className="remove">
              Delete
            </Button>
          </>
        ) : null}
          </>}
          
      </div>
      <br />
      </>
      );
}

export default Post;
