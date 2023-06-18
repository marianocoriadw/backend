import UserManager from './managers/UserManager.js';

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers()
    console.log (usuarios)

    const user = {
        nombre: 'mariano',
        apellido: 'coria',
        nombreUsuario: 'marianoCor',
        contrasena: '01234'
    }

    await manager.createUser(user)
    usersResult = await manager.getUsers()
    await manager.validateUser('marianoCor', '01234')
    console.log(usersResult)
}
env()