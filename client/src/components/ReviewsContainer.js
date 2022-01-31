import React from "react"
import ReviewCard from "./ReviewCard"
import NewReviewForm from "./NewReviewForm"
import Header from "./Header";



function  ReviewsContainer(){

    const [review, setReview] = useState([]);
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("id")

    // useEffect(() =>{
    //     fetch("/restaurants")
    //     .then((r) => r.json())
    //     .then((review) => setReview(review));
    // }, []);




    const ReviewCard = review
    .filter((review) =>
      listing.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((reviewA, reviewB) => {
      if (sortBy === "id") {
        return reviewA.id - reviewB.id;
      } else {
        return reviewA.location.localeCompare(reviewB.location);
      }
    })
    .map((reviewObj) => (
      <ReviewCard
        key={reviewObj.id}
        listing={reviewObj}
        onDeleteListing={handleDeleteListing}
      />
      ));
    return(
        <main>
            <Header
            onSearch={setSearch} 
            />
            <ReviewCard
                review={review}
                key={review.id}
                onRemoveListing={onRemoveListing}
            />
        </main>
    )
}

export default ReviewsContainer