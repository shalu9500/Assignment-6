export default function UserCard({ user }) {
    return (
        <div className="card">
            <h2>User-details</h2>
            <p><strong>Name:</strong>{user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    )
}