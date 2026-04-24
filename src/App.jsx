import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerApp } from './router/routerApp';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {routerApp.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
