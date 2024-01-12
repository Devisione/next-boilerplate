import React from "react";
import { useUnit } from "effector-react";
import { $userState } from "../../model/store";

const UserAvatar = () => {
  const user = useUnit($userState.$data);
  console.log(user);

  return <div>{user?.avatar}</div>;
};

export default UserAvatar;
