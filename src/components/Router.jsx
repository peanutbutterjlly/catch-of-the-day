import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import StorePicker from "./StorePicker";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
