import styled from "styled-components";
import { SeachInput } from "../molcules/SeachInput";
import { UserCard } from "../orgamisms/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map((id) => {
    return {
      id: id,
      name: `じゃけ${id}`,
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      email: "aaa@mail",
      phone: "000-000-000",
      company: {
        name: "test株式会社"
      },
      website: "https://google.com"
    };
  });

  return (
    <SContainer>
      <h2>user</h2>
      <SeachInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
