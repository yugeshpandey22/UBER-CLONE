// services/user.service.js
const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }

  // ✅ Must use await
  const user = await userModel.create({
    firstname,
    lastname,
    email,
    password,
  });

  return user;
};
