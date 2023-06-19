const readline = require('readline');

let taskList = [];

// Función para agregar una tarea a la lista
function addTask(indicador, descripcion) {
  return new Promise((resolve, reject) => {
    const task = {
      indicador: indicador,
      descripcion: descripcion,
      estado: "incompleta"
    };
    taskList.push(task);
    resolve(task);
  });
}

// Función para eliminar una tarea de la lista
function deleteTask(indicador) {
  return new Promise((resolve, reject) => {
    const index = taskList.findIndex(task => task.indicador === indicador);
    if (index !== -1) {
      const deletedTask = taskList.splice(index, 1)[0];
      resolve(deletedTask);
    } else {
      reject(new Error("La tarea no existe."));
    }
  });
}

// Función para marcar una tarea como completada
function completeTask(indicador) {
  return new Promise((resolve, reject) => {
    const task = taskList.find(task => task.indicador === indicador);
    if (task) {
      task.estado = "completada";
      resolve(task);
    } else {
      reject(new Error("La tarea no existe."));
    }
  });
}

// Función para mostrar la lista de tareas
function displayTasks() {
  if (taskList.length === 0) {
    console.log("No hay tareas en la lista.");
  } else {
    console.log("Lista de tareas:");
    taskList.forEach(task => {
      console.log(`${task.indicador} - ${task.descripcion} (${task.estado})`);
    });
  }
}

// Crear la interfaz para leer las entradas por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para leer una línea de la consola
function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      resolve(answer);
    });
  });
}

// Función principal
async function main() {
  while (true) {
    console.log("Seleccione una opción:");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Completar tarea");
    console.log("4. Mostrar tareas");
    console.log("5. Salir");

    const option = await question("Opción: ");

    if (option === "1") {
      const indicador = await question("Indicador de la tarea: ");
      const descripcion = await question("Descripción de la tarea: ");
      try {
        await addTask(indicador, descripcion);
        console.log("Tarea agregada exitosamente.");
      } catch (error) {
        console.log(error.message);
      }
    } else if (option === "2") {
      const indicador = await question("Indicador de la tarea a eliminar: ");
      try {
        const deletedTask = await deleteTask(indicador);
        console.log(`Tarea eliminada: ${deletedTask.indicador} - ${deletedTask.descripcion}`);
      } catch (error) {
        console.log(error.message);
      }
    } else if (option === "3") {
      const indicador = await question("Indicador de la tarea a completar: ");
      try {
        const completedTask = await completeTask(indicador);
        console.log(`Tarea completada: ${completedTask.indicador} - ${completedTask.descripcion}`);
      } catch (error) {
        console.log(error.message);
      }
    } else if (option === "4") {
      displayTasks();
    } else if (option === "5") {
      break;
    } else {
      console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
    console.log();
  }

  // Cerrar la interfaz de lectura de la consola
  rl.close();
}

// Ejecutar la función principal
main();
