import { useQuery } from "@apollo/client/react";
import { GET_USER } from "../../queries";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import PopularRepos from "../charts/PopularRepos";
import UsedLangauges from "../charts/UsedLangauges";
import Loading from "./Loading";
import type { User } from "../../types";

type UserProfileProps = {
  userName: string;
};
const UserProfile = ({ userName }: UserProfileProps) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      login: userName,
    },
  });

  if (loading) return <Loading />;
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
  } = data.user as User;

  return (
    <div>
      <UserCard avatarUrl={avatarUrl} name={name} url={url} bio={bio} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
          <UsedLangauges repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
