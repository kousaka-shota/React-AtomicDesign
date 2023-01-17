import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/top";
import { Users } from "../components/pages/users";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { HeaderOnly } from "../components/template/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
