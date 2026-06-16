import { useQuery } from "@apollo/client/react";
import { GET_USER } from "../../queries";

type UserProfileProps = {
  userName: string;
};
const UserProfile = ({ userName }: UserProfileProps) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      login: userName,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;

  if (!data) return <div className="text-2xl font-bold">User not found...</div>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <h1 className="text-2xl">{bio}</h1>
    </div>
  );
};

export default UserProfile;
