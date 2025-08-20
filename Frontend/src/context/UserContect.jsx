import React, { createContext, useState } from "react";

// Context create karo
 const UserDataContext = createContext();

const UserContect = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: ""
    }
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContect;
