// import ListingsContainer from "./ListingsContainer";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";
import RestaurantContainer from "./RestaurantContainer";
function Main({ user, setUser }) {
  return (
    <div
      style={{
        textAlign: "center",
        paddingRight: "200px",
        paddingLeft: "200px",
        paddingBottom: "200px",
      }}
    >

      <Switch>
        <Route exact path="/">
      <h1>{user.username}'s YELPPY</h1>
          <RestaurantContainer />
        </Route>

        <Route exact path="/profile-edit">
          <Profile user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
