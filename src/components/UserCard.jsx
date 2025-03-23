import React, { useMemo } from "react";
import "../App.css";

const UserCard = React.memo(({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>
        <strong>El. pastas:</strong> {user.email}
      </p>
      <p>
        <strong>Miestas:</strong> {user.address.city}
      </p>
    </div>
  );
});
export default UserCard;
