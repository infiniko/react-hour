import React from "react";
import Friend from "./Friend";

const List = ({ friends }) => {
  return (
    <section>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </section>
  );
};

export default List;
