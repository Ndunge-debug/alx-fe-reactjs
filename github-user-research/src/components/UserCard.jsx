const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={100} />
      <h2>{user.login}</h2>
      <p>{user.bio || 'No bio available'}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
