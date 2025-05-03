import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* <!-- navbar --> */}
      

      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header/>
        <hr class="mt-4" />

        {/* <!-- todo list --> */}
        <TodoList/>

        <hr class="mt-4" />

        {/* <!-- footer --> */}
        <Footer/>
      </div>
    </div>
    </Provider>
  );
}
