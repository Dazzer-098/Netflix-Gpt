import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utility/store";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
