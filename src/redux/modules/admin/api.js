// const fakeLoginAdmin = () => new Promise((resolve, reject) => {
//     const user = {username: 'admin'}
//     if (!user) {
//       reject(new Error('Users not found'));
//     }

//     resolve(Object.values(user));
//   });
// function fetchLoginAdmin() {
//     return fakeLoginAdmin()
//             .then(reponse =>{ console.log('oke'); reponse.json()})
//             .catch(err => { throw err})
    
// }

// export {fetchLoginAdmin} ;

const url = "https://jsonplaceholder.typicode.com/users";

const fetchLoginAdmin = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export  {fetchLoginAdmin};