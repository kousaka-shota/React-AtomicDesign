import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SeachInput } from "./components/molcules/SeachInput";
import { UserCard } from "./components/orgamisms/UserCard";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { HeaderOnly } from "./components/template/HeaderOnly";
import "./styles.css";
import { Router } from "./router/router";

export function App() {
  return <Router />;
}
