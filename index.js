const userDatabase = {
  emmex: {
    firstName: "Adeyemi",
    lastName: "Emmex",
    email: "emmex@gmail.com",
    accountActivated: true,
    password: "password123",
  },

  joy: {
    firstName: "Joy",
    lastName: "Felix",
    email: "joy@gmail.com",
    accountActivated: true,
    password: "password456",
  },

  ishoshot: {
    firstName: "Oluwatobi",
    lastName: "Ishola",
    email: "ishoshot@gmail.com",
    accountActivated: true,
    password: "password789",
  },

  folly: {
    firstName: "Folorunso",
    lastName: "Adesanya",
    email: "folly@gmail.com",
    accountActivated: false,
    password: "password123",
  },

  smbmuller: {
    firstName: "Damilola",
    lastName: "Adenekan",
    email: "smbmuller@gmail.com",
    accountActivated: true,
    password: "password123",
  },
};

function displayUserDetails() {
  let username = prompt("Enter username");
  while (validateUsername(username) === false) {
    username = prompt("Username not valid, Please input a valid username");
  }

  if (username == null) {
    return;
  }

  let password = prompt("Enter password");
  while (validatePassword(password) == false) {
    password = prompt("Password not valid, Please input a valid Password");
  }

  if (password == null) {
    return;
  }

  let confirmPassword = prompt("Confirm Password");
  if (confirmPassword == null) {
    return;
  }

  while (confirmPassword !== password) {
    confirmPassword = prompt(
      "Password mismatch, Please re-enter confirm password"
    );
  }
  if (user == undefined){
    alert("User not found in the database")
    return;
  }

  const user = userDatabase[username];
  alert(` Welcome😊, user found with the following details:
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}
    `);
}

displayUserDetails();

alert("You've come to the end of this programme, Goodbye😊👋");

function validateUsername(username) {
  if (username == null) {
    return true;
  } else if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password == null) {
    return true;
  } else if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
