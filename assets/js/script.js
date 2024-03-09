// Programamos una función asíncrona para cargar el resultado de nuestra petición a la API
const userData = (async () => {
    try {
        // Definimos una constante para insertar el resultado en HTML
        const container = document.querySelector('#user-data');

        // Función para obtener y mostrar los datos
        const fetchData = async () => {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();

            // Imprime el arreglo en la consola para verificar
            console.log("Arreglo en obtener datos: ", data.results);

            // Muestra los datos en HTML
            displayData(data.results);
        };

        // Función para mostrar los datos en HTML
        const displayData = (data) => {
            const userInfo = data.map(i =>
                `<div>
            <img src='${i.picture.large}'/>
            <div>
              <span>${i.name.first} ${i.name.last} </span></br>
              <span>${i.email} </span></br>
              <span>${i.cell} </span></br>
            </div>
          </div>`
            ).join('');

            // Inserta los datos en HTML
            container.innerHTML = userInfo;
        };

        // Llamamos a la función para obtener y mostrar los datos
        await fetchData();

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
})();
