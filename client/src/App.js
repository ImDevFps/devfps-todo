import "./App.css";
import { Route, Switch } from "react-router-dom";
import Start from "./pages/Start/Start";
import HomePage from "./pages/HomePage/HomePage";
import { createStructuredSelector } from "reselect";
import { IsFirstTimeRun } from "./redux/Start/start.selector";
import { connect } from "react-redux";

import Calendar from "./components/Calendar/Calendar";
import Info from "./pages/Info/Info";
import UpComming from "./pages/UpComming/UpComming";

const App = ({ started }) => {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (started ? <HomePage /> : <Start />)}
        />
        <Route path='/calendar' component={Calendar} />
        <Route path='/up-comming' component={UpComming} />
        <Route path='/info' component={Info} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  started: IsFirstTimeRun,
});

export default connect(mapStateToProps)(App);
