import Header from "./components/Header"
import Content from "./components/Content";
import Image from "./components/Image";
import './App.css';

/*
Завдання1.
    Завдання лаб. роб. №1 реалізувати за допомогою фреймворку
    React.JS. Використовувати такі компоненти Header, Content, Image.
    Компоненти Header, Image реалізувати у вигляді function, а компонент
    Content – у вигляді class.
*/

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Image/>
        </div>
    )
}

export default App
