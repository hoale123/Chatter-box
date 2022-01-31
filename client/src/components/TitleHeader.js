import { Header, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./photos/icons8-typewriter-with-paper-50.png";
import typingLogo from "./photos/5 start.gif";

function TitleHeader({ user }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Header as="h1">
        <Header.Content>
          <Image
            src={logo}
            style={{ float: "left", height: "30px", width: "30px" }}
          />
          YELPPY
          <Image
            src={logo}
            style={{ float: "right", height: "30px", width: "30px" }}
          />
        </Header.Content>

        {user ? (
          <Image
            src={user.profile_picture}
            style={{
              float: "right",
              height: "50px",
              width: "50px",
            }}
          />
        ) : (
          <Divider />
        )}
      </Header>

      {user ? null : (
        <div
          style={{
            textAlign: "left",
            paddingRight: "300px",
            paddingLeft: "300px",
            paddingTop: "50px",
          }}
        >
          <Header as="h2" style={{ fontWeight: "lighter" }}>
            Welcome to Yelppy{" "}
          </Header>
          <Image
            src={typingLogo}
            style={{
              float: "left",
              height: "100px",
              width: "200px",
              margin: "20px",
              
            }}
          />
          <p style={{ fontSize: "16px" }}>
          A seal is an intellectual cherry. A rhetorical horse without peaches is truly a squirrel of witty scorpions! The romantic owl reveals itself as a pro-active goldfish to those who look. 
          </p>

          <div style={{ textAlign: "center", fontSize: "16px" }}>
            <Link to="/login">Login &ensp;</Link>
            <Link to="/signup">&ensp;Signup</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TitleHeader;
