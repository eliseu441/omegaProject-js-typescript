import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loja" element={<AboutPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
