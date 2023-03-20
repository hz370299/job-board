import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Select from "pages/Select";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/select">
                    <Select />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;