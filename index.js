const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Datos del curso según el Caso 3
const curso = {
    nombreCurso: "Backend con Node.js y Express",
    duracion: "40 horas",
    instructor: "Carlos Mendoza",
    estado: "Disponible"
};

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <h1>Sistema de Registro de Cursos - Funcionando Correctamente</h1>
        <h2>Información del Curso:</h2>
        <ul>
            <li><strong>Nombre del Curso:</strong> ${curso.nombreCurso}</li>
            <li><strong>Duración:</strong> ${curso.duracion}</li>
            <li><strong>Instructor:</strong> ${curso.instructor}</li>
            <li><strong>Estado:</strong> ${curso.estado}</li>
        </ul>
    `);
});

// Iniciar servidor local
app.listen(PORT, () => {
    console.log(`Servidor de EduTechPro ejecutándose en http://localhost:${PORT}`);
});