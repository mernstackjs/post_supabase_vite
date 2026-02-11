import { useAuth } from "../providers/auth-context";

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <div>
      <div className="border p-4 m-32">
        <h1>Profile</h1>

        <h1>welcome {currentUser?.full_name}</h1>

        <ul>
          <li>ID: {currentUser?.id}</li>
          <li>EMAIL: {currentUser?.email}</li>
        </ul>
      </div>
    </div>
  );
}
