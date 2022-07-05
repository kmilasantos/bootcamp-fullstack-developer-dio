/*função que retorna o nome dos menbros de um Map que tem o papel 'admin' no sistema*/
function getAdmin(map){
    let admin = [];
    for ([key, value] of map){
        if (value === 'Admin'){
            admin.push(key);
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Jorge','User');
usuarios.set('Natália','Admin');

console.log(getAdmin(usuarios));