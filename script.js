// Función para mostrar la hora actual
function updateTime() {
	const now = new Date();
	const time = now.toLocaleTimeString();
	document.getElementById("time").textContent = time;
}

// Función para mostrar la fecha actual
function updateDate() {
	const now = new Date();
	const date = now.toLocaleDateString();
	document.getElementById("date").textContent = date;
}

// Función para obtener la ubicación del usuario
function updateLocation() {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				document.getElementById("location").textContent = `Latitud: ${latitude.toFixed(
					2
				)}, Longitud: ${longitude.toFixed(2)}`;
			},
			(error) => {
				document.getElementById("location").textContent = "No se pudo obtener la ubicación.";
			}
		);
	} else {
		document.getElementById("location").textContent = "Geolocalización no soportada.";
	}
}

// Inicializar funciones
function init() {
	updateTime();
	updateDate();
	updateLocation();
	setInterval(updateTime, 1000); // Actualizar hora cada segundo
}

// Ejecutar la función init al cargar la página
window.onload = init;
