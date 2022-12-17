import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

/*
Завдання-1.
    Завдання лаб. роб. №1 реалізувати за допомогою фреймворку
    React.JS. Використовувати такі компоненти Header, Content, Image.
    Компоненти Header, Image реалізувати у вигляді function, а компонент
    Content – у вигляді class.
*/

/*
Завдання-2.
    Створити галерею товарів (не менш 6) на основі компонента GoodsCard
    та використати props для передачі параметрів. В картці товару повинно бути
    фото товару, назва, ціна.
*/


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="task1" element={<Task1/>}/>
                    <Route path="task2" element={<Task2/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
