// Description: Fetch API
// GET
async function getFunction(param) {
  try {
    const url = "https://assets.breatheco.de/apis/fake/todos/user/" + param;
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(response.status);
    console.log(response.ok);
    if (!response.ok) {
      console.log("la respuesta fue un fracaso!");
    }
  } catch (error) {
    console.log("houston tenemos un problema", error);
  }
}

// getFunction('igcodinap')

// POST

async function postFunction(param) {
  try {
    const url = "https://assets.breatheco.de/apis/fake/todos/user/" + param;
    const body = [];
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(response.status);
  } catch (error) {
    console.log("houston tenemos un problema");
  }
}

// postFunction('igcodinap')

// PUT

async function putFunction(param) {
  try {
    const url = "https://assets.breatheco.de/apis/fake/todos/user/" + param;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify([
        { label: "Make the bed", done: false },
        { label: "Do the replits", done: false },
        { label: 'new todo', done: true},
        { label: 'new tdo 2', done: true},
        { label: 'new todo3', done: false}
      ]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(response.status);
  } catch (error) {
    console.log("houston tenemos un problema");
  }
}

putFunction("igcodinap");

// HTTP: protocolo de comunicacion
//REQUEST
// body, url, headers, metodos
// METODOS van el Request
// GET: obtener informacion
// POST: para crear informacion
// PUT: para editar informacion
// DELETE: para borrar informacion

// RESPONSE
// url, body, estados
// ESTADOS van en el Response
//100-199
//200-299: exitosas
//300-399
//400-499: error en el request
//500-599: error interno del servidor

// Al user fetch usamos un objeto Request:
// url, body, headers, method
