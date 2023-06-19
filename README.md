# node_server

# PREGUNTAS Y RESPUESTAS:

# Que sucedio al usar async y await?
lo que sucedio fue que se puede escribir codigo asincrónico de forma mas sincrónica
y facíl de leer. async se utiliza para declarar una funcion asincrónica y await se coloca
antes de hacer una llamada a una promesa para esperar a que se resuelve andes de continuar
con la ejecución de codigo.

# Que sucedio al usar el metodo then()?

Al usar el metodo then() este permitio encadenar una funcion callback que se ejecutara cuando
la primesa se resuelva correctamente, al usar este método se especifica que hacer despues de que
la promesa se haya resuelto exitosamente

# Que diferencias encontraste entre async, await y el metodo then()?

Pues de las diferencias que he notado y investigado he visto que por ejemplo 
async y await son palabras claves que permiten escribir codigo asincrónico de manera mas
sincrónica evitando el anidamiento de promesas

el metodo then() es una forma tradicional de manejar promesas y se basa en el uso de devoluciones
llamadas callbacks con then()

async y await estan estrechamente relacionados ya que ambos funcionan juntos para lograr
un flujo de codigo mas siuncrónico mientras que el metodo then() es por asi decirlo mas explicito y puede ser util
cuando se requiere un control mayor sobre el flujo del codigo o tambien es util cuando se necesitan
ejecutar diferentes acciones en secuencia, el metodo then() se puede utilizar para encadenarlos.






