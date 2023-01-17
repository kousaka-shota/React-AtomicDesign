import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/top";
import { Users } from "../components/pages/users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
