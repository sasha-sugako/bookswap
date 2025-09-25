import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import AppLayout from "./components/layout/AppLayout.jsx";

function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<div>Books</div>}/>
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}

export default App


/*
* Основной (Primary)	#2A5D9F	Глубокий синий, акцентный цвет для кнопок и ссылок
Вторичный (Secondary)	#4F83C2	Мягкий небесный синий, hover/меню
Фон (Background)	#F4F7FB	Светло-голубой, общий фон сайта
Нейтральный (Neutral)	#FFFFFF	Белый, карточки, контент
Акцент (Accent)	#FFC857	Золотисто-жёлтый, выделения (ассоциация с книгами)
Тёмный (Dark)	#1B2D45	Тёмно-синий, основной текст
Текст Header	#FFFFFF	Белый текст для тёмного header (контрастный и читаемый)
* */
