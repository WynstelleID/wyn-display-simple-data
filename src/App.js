import logo from "./logo.svg";
import "./App.css";
const user = {
  name: "Dandi Setiyawan",
  location: "South Tangerang",
  foodType: "Ayam geprek",
  age: 24,
  likes: "Coding when u fell asleep",
  twitterUserName: "dandisetiyawan_",
  avatar:
    "https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
};

function App() {
  const url = `https://twitter.com/${user.twitterUserName}`;

  return (
    <div className="App">
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
        <p>
          <strong>Location</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>
        <p>
          <strong>Twitter</strong>
          <a href={url}>@{user.twitterUserName}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
