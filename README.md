# UniShare API

Api desenvolvida para o **Projeto Integrador** do curso **[Front End Coding Facebook](https://www.digitalhouse.com/br/bolsas/estacao-hack-curso)** em parceria da **[Estação Hack from Facebook](https://estacaohack.fb.com/)** com a **[Digital House](https://www.digitalhouse.com/br/)**.

---

## 🛠 Tecnologias Utilizadas

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Mongoose](https://mongoosejs.com/)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Nodemon](https://nodemon.io/)**
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**

---

## 🎲 Recursos da Aplicação

```bash
#Autenticação
[POST] - /api/auth

#Logout
[GET] - /api/logout

```

```bash
#Listagem de Usuários
[GET] - /api/users

#Cadastro de Usuários
[POST] - /api/users

#Atualização de Usuários
[PUT] - /api/users/:user_id

#Exclusão de Usuários
[DELETE] - /api/users/:user_id
```

```bash
#Listagem de Quartos
[GET] - /api/rooms

#Cadastro de Quartos
[POST] - /api/rooms

#Atualização de Quartos
[PUT] - /api/rooms/:room_id

#Exclusão de Quartos
[DELETE] - /api/rooms/:room_id

#Favoritar um Quarto
[GET] - /rooms/:room_id/like

#Remover um quarto dos favoritos
[GET] - /rooms/:room_id/like
```

---

## 🧭 Consumindo a API

A api se encontra hospedada no **Heroku** e pode ser consumida atraves do seguinte endereço:

```
  https://api-unishare.herokuapp.com/:recurso
```

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---
