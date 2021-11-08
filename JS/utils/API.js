const serverUrl = "http://localhost:3000";

class API {
  static getToys = (resolve, reject) => {
    fetch(serverUrl + '/toys')
      .then(data => data.json())
      .then(resolve)
      .catch(reject);
  }

  static deleteToy = (id, resolve, reject) => {
    fetch(`${serverUrl}/toys/${id}`, { method: 'DELETE' })
      .then(data => data.json())
      .then(resolve)
      .catch(reject)
  }
}

// API.getToys(
//   (data) => console.log('Gauti duomenys:', data), // success
//   (reject) => console.error('Klaida', reject) // failure
// )


// API.deleteToy(
//   '1',
//   (data) => console.log('Objektas istrintas', data), // success
//   (reject) => console.error('Klaida', reject) // failure  
// )
