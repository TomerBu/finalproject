import { useEffect } from "react";
import { fetchUsers } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserView = () => {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useAppSelector((s) => s.user);
  //const user: User = useSelector<RootState>(s=>s.user)
  //const user = useAppSelector(s=>s.user)
  // once the component is loaded (do once) fetchUser
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>List of Users:</h2>
      {loading && <div>loading...</div>}
      {error && <div>Error: {error}</div>}
      {users.length > 0 && (
        <>
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserView;

