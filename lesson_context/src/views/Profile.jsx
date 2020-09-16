import React from "react";

const user = {
  name: "Mango",
  email: "mango@mail.com",
  avatar:
    "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg",
};

const Profile = () => (
  <>
    <h1>Profile page</h1>
    <img src={user.avatar} alt="avatar" />
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </>
);

export default Profile;
