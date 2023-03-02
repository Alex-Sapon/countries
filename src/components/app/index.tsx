import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { HashRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
