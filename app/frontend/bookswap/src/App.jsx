import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Hello app</div>} />
                <Route path="/books" element={<div>Books</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
