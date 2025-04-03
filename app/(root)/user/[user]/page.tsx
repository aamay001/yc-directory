import React from 'react'

interface UserPageProps {
  params: {
    id: string,
  }
}

const Page = async (props: UserPageProps) => {
  const { id } = await props.params;

  return (
    <div>User {id}</div>
  );
}

export default Page
