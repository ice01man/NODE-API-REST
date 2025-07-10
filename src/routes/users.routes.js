
// URL con  <script>, <object>, <embed>, y <link>.


const getAllUsers(req, res) => {
    console.log('pedido de Usuarios', req)
};

const getUserbyId(req, res) => {
    console.log('Pedido de User por ID', req)
};

const CreateUser(req, res) => {
    console.log('Crear un usuario', req)
};

const updateUser(req, res) => {
    console.log('Actualizamos un usuario')
}

const DeleteUser(req, res)=> {
    console.log('Delete un usuario', req)
}