import UserCard from "./UserCard";
import "../App.css";

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <div className="no-results">Nerasta jokiu naudotoju</div>
      )}
    </div>
  );
}
export default UserList;
