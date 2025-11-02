import { useState, useEffect} from "react"
import UserCard from "./UserCard"

export default function UserList() {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container">
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>Loading users</p>
      )}
    </div>
  );
};
