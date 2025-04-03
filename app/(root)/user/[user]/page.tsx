import React from 'react'

interface UserPageProps {
  params: {
    id: string,
  }
}

const UserProfilePage = async (props: UserPageProps) => {
  const { id } = await props.params;

  return (
    <h1 className="heading">User {id}</h1>
  );
}

export default UserProfilePage
