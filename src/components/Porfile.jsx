import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Porfile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;
  return <>Welcome {user.username}</>;
};

export default Porfile;
