import { Routess, store } from "../config";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routess />
    </Provider>
  );
}

export default App;
