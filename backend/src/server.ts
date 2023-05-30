import express from 'express';
import UserController from './controllers/userController';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
app.post('/users', UserController.createUser);
app.post('/users/login', UserController.loginUser);
app.get('/users/:id', UserController.getUserDetails);
app.put('/users/:id', UserController.updateUser);
app.delete('/users/:id', UserController.deleteUser);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
