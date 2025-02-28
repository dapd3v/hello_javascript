// Manejo de  APIs

// - APIs REST (HTTP + URLs + JSON)

// - Metodos HTTP:
//  - GET: Obtener información
//  - POST: Crear información
//  - PUT: Modificar información
//  - DELETE: Borrar información

// - Codigos de respuesta HTTP:
//  - 200: OK
//  - 201: Created
//  - 400: Bad Request
//  - 401: Unauthorized
//  - 403: Forbidden
//  - 404: Not Found

// - Consumir APIs REST con JavaScript:

const URL_BASE = "https://jsonplaceholder.typicode.com" 

fetch(`${URL_BASE}/posts`)
    .then(response => {
      // transformar la respuesta a JSON
      return response.json()
    })
    .then(data => {
      // procesa la información
        console.log(data)
    })
    .catch(error => {
      // captura errores
        console.log(error)
    })

// - Consumir APIs REST con JavaScript (async/await):

async function getPosts() {
  try {
    const response = await  fetch(`${URL_BASE}/posts`)
    .then(response => response.json())

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log('Errors',error)
  }
}

getPosts()

// - Solicutudes POST:

const newPost = {
  userId: 1,
  title: "Nuevo post",
  body: "Contenido del nuevo post",
}

async function createPost() {
  try {
    const response = await fetch(`${URL_BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log('Errors',error)
  }
} 

createPost()

// - Manejo de errores:

fetch(`${URL_BASE}/posts`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la petición, status HTTP: ${response.status}`)    
      }
      return response.json()
    })
    .then(data => {
      // procesa la información
        console.log(data)
    })
    .catch(error => {
      // captura errores
        console.log(error)
    })


// - Metodos HTTP adicionales
// - PATCH: Modificar información
// - OPTIONS: Obtener información sobre los métodos HTTP permitidos

async function partiaUpdatePost(id) {
  try {
    const response = await fetch(`${URL_BASE}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: 'Post modificado'})
    })
    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log('Errors',error)
  }
}

partiaUpdatePost(10)


// - Consumo de APIs con Autenticación

// - Autenticación con token API key

async function getWeather(city) {
  
  const URL_API = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY  = "API_KEY" 
  try {
    const response = await fetch(`${URL_API}?q=${city}&appid=${API_KEY}`)

    const data = await response.json()

    console.log(data)

  } catch (error) {
    
  }
}

getWeather('Madrid')


// - Otros tipos de autenticación
// - Basic Auth
// - OAuth
// - JWT


// - Versionado de APIs 
// - URL con versionado
//  - https://api.example.com/v1/posts


async function getPokemon(pokemon) {
  
  const URL_API = "https://pokeapi.co/api/v2/pokemon"
  try {
    const response = await fetch(`${URL_API}/${pokemon}`)

    const data = await response.json()

    console.log('Habilidades de ',data.name)

    data.abilities.forEach(ability => {
      console.log(ability.ability.name)
    }) 

  } catch (error) {
    
  }
}

getWeather('ditto')

// - Headers con versionado
//  - Accept: application/vnd.example.v1+json
