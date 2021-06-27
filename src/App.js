import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Login from './login';
import LoginForm from './loginForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row"><h1 className="p-5">Authentication Port</h1></div>
        <div className="row">
          <div className="col-md-5">
            <Login />
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-6 p-5 my-auto bg-dark rounded">
            <LoginForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
