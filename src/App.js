import logo from './logo.svg';
import './App.css';
import HooksTest from './componets/HooksTest';
import UseCallBackFun from './componets/UseCallBackFun';
import UseMemoHook from './componets/UseMemoHook';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import CalculatorDemo from './componets/CalculatorDemo.js/CalculatorDemo';
import ImageCarousel from './componets/ImageCarousel/ImageCarousel';
import ToDoLIst from './componets/ToDoListDemo.js/ToDoLIst';
import NavbarRespMain from './componets/NavbarRes/NavbarRespMain';
import Navbar from './componets/Navbar2/Navbar';
import FromMain from './componets/FormValidation/FromMain';
import ChatBotMianPage from './componets/ChatBot/ChatBotMianPage';
import ChatBotAi from './componets/ChatBot/ChatBotAi';
import NewChatbot from './componets/ChatBot/NewChatbot';
import ChatBotHomePage from './componets/ChatBot/ChatBotHomePage';

function App() {
  return (
    // <div className="">
    //  <HooksTest />
    //  <h1>+++++++++++ USE CALL BACK ++++++++++++</h1>
    //  <UseCallBackFun />
    //  <div><h1>+++++++++++++++++++++++++USE MEMO+++++++++++++++++++++++++++++</h1></div>
    //  <UseMemoHook />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path='/' Component={HooksTest} /> 
          <Route path='/cal' Component={CalculatorDemo} />
          <Route path='/carousel' Component={ImageCarousel} />
          <Route path='/todo' Component={ToDoLIst} />
          <Route path='/nav' Component={ NavbarRespMain } />
          <Route path='/nav2' Component={ Navbar } />
          <Route path='/form' Component={ FromMain } />
          <Route path='/chat' Component={ ChatBotMianPage } />
          <Route path='/chatai' Component={ ChatBotAi } />
          <Route path='/onechat' Component={ NewChatbot } />
          <Route path='/chatHome' Component={ ChatBotHomePage } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
