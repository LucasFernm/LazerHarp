import React from "react";
import UserCreationForm from "./components/UserCreationForm";
import UserLoginForm from "./components/UserLoginForm";

const App = () => {
  return (
    <div>
      <h1>Formulário de Criação de Usuário</h1>
      <UserCreationForm />

      <h1>Formulário de Login do Usuário</h1>
      <UserLoginForm />
    </div>
  );
};

export default App;
