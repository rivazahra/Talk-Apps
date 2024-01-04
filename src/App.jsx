import { ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App =() => {
    if(!localStorage.getItem('username')) 
        return <LoginForm/>
    
    return (
        <ChatEngine
        height="100vh"
        projectID="d0dcafa4-0432-4a6f-8440-7e5c7f9c2f9c"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}/>
    )
}

export default App