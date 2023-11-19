import React, { useState } from 'react';
import Header from './components/header';
import ListarTarefa from './pages/tarefa/ListarTarefa';
import LoginPage from './pages/login/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? (
        <ListarTarefa />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;