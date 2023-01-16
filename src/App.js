import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SeachInput } from "./components/molcules/SeachInput";
import { UserCard } from "./components/orgamisms/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import "./styles.css";

export function App() {
  const user = {
    name: "じゃけ",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    email: "aaa@mail",
    phone: "000-000-000",
    company: {
      name: "test株式会社"
    },
    website: "https://google.com"
  };
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SeachInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
