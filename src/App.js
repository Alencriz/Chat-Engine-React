import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm';

import  ChatFeed  from "./components/ChatFeed";
import './App.css';

const App =() => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine

        height="100vh"
        projectID="1c28c1c8-42af-48e3-be43-fec0e9870425"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );
}

export default App;