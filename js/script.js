// Espera a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // --- GRÁFICO DE GLUCOSA (Sección Interfaz) ---
    
    // Obtenemos el contexto (canvas) donde dibujaremos el gráfico.
    const ctx = document.getElementById('glucoseChart');

    // Datos simulados de glucosa (mg/dL) y etiquetas de tiempo.
    const glucoseData = {
        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        datasets: [{
            label: 'Nivel de Glucosa (mg/dL)',
            // Valores simulados, idealmente en un rango realista (70-180 mg/dL)
            data: [110, 145, 120, 105, 160, 130, 95], 
            
            // Estilos del gráfico
            borderColor: '#28a745', // El mismo verde del botón CTA
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            borderWidth: 3,
            tension: 0.4, // Suaviza la línea
            fill: true, // Rellena el área bajo la línea
        }]
    };

    // Opciones de configuración para el gráfico.
    const glucoseOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tendencia de Glucosa del Día',
                font: { size: 16 }
            }
        },
        scales: {
            y: {
                // Rango de la escala vertical (Y)
                min: 50,
                max: 200, 
                title: {
                    display: true,
                    text: 'Glucosa (mg/dL)'
                },
                // Líneas de referencia para indicar rangos saludables
                ticks: {
                    callback: function(value) {
                        return value + ' mg/dL';
                    }
                },
                
                // Añadir líneas de rango objetivo (personalización avanzada)
                // Usamos anotaciones para mostrar el rango objetivo
                // Requiere el plugin 'chartjs-plugin-annotation' (opcional)
            }
        }
    };

    // Creación del gráfico de línea
    new Chart(ctx, {
        type: 'line',
        data: glucoseData,
        options: glucoseOptions
    });
    
    // Aquí puedes añadir más funciones JS para la navegación, etc.
    // Por ejemplo, para un menú responsivo:
    // const navToggle = document.querySelector('.nav-toggle');
    // const navMenu = document.querySelector('.main-nav');
    // navToggle.addEventListener('click', () => {
    //    navMenu.classList.toggle('nav-menu-visible');
    // });
});
