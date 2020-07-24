//sample users
const users = [
  {
    id: 1,
    email: "meghanath@domain.com",
    password: "12345",
    address: "2233 Eglinton Avenue east",
    images: [
      {
        url: "http://192.168.2.23:9000/assets/profile-pic.jpg",
      },
    ],
  },
  {
    id: 2,
    email: "david@domain.com",
    password: "12345",
    address: "70 Mornelle court",
    images: [
      {
        url: "http://192.168.2.23:9000/assets/headshot.jpg",
      },
    ],
  },
  {
    id: 3,
    email: "dave@domain.com",
    password: "12345",
    address: "70 Mornelle court",
    images: [
      {
        url: "http://192.168.2.23:9000/assets/headshot.jpg",
      },
    ],
  },
];
//to fetch a user by username/email
const getUserByEmail = (email) => users.find((user) => user.email === email);
//to add new user
const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUserByEmail,
  addUser,
};
