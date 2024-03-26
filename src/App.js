import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu';
import FormFloatingCustom from './pages/myform/FormFloatingCustom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<FormFloatingCustom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
