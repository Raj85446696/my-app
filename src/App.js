import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutus = "About" contactus="Contact"></Navbar>
    <Textform heading="Enter the text to analyze Below" ></Textform>
    </>
  );
}

export default App;
