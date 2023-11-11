function calculateGrade() {


const note1 = parseFloat(document.getElementById("note1").value);
const note2 = parseFloat(document.getElementById("note2").value);
const note3 = parseFloat(document.getElementById("note3").value);
const note4 = parseFloat(document.getElementById("note4").value);
const note5 = parseFloat(document.getElementById("note5").value);
const note6 = parseFloat(document.getElementById("note6").value);



const weightedGrade = (note1 * 0.12 + note2 * 0.21 + note3 * 0.12 + note4 * 0.21 + note5 * 0.13 + note6 * 0.21).toFixed(2);    

    localStorage.setItem('nombre', document.getElementById("nombre").value);
    localStorage.setItem('asignatura', document.getElementById("Asignatura").value);
    localStorage.setItem('note1', document.getElementById("note1").value);
    localStorage.setItem('note2', document.getElementById("note2").value);
    localStorage.setItem('note3', document.getElementById("note3").value);
    localStorage.setItem('note4', document.getElementById("note4").value);
    localStorage.setItem('note5', document.getElementById("note5").value);
    localStorage.setItem('note6', document.getElementById("note6").value);
    localStorage.setItem('weightedGrade', weightedGrade);

window.location.href= "Resultado.html"; 
}

function validateForm() {
    let nombre = document.getElementById("nombre").value;
    const Asignatura = document.getElementById("Asignatura").value;
    const note1 = document.getElementById("note1").value;
    const note2 = document.getElementById("note2").value;
    const note3 = document.getElementById("note3").value;
    const note4 = document.getElementById("note4").value;
    const note5 = document.getElementById("note5").value;
    const note6 = document.getElementById("note6").value;


    if (nombre === "") {
        alert("El campo Nombre es obligatorio.");
        return false;
    } else if (Asignatura === "") {
        alert("El campo Asignatura es obligatorio.");
        return false;
    } else if (isNaN(note1) || note1 === "") {
        alert("La Nota 1 debe ser un número válido.");
        return false;
    } else if (isNaN(note2) || note2 === "") {
        alert("La Nota 2 debe ser un número válido.");
        return false;
    } else if (isNaN(note3) || note3 === "") {
        alert("La Nota 3 debe ser un número válido.");
        return false;
    } else if (isNaN(note4) || note4 === "") {
        alert("La Nota 4 debe ser un número válido.");
        return false;
    } else if (isNaN(note5) || note5 === "") {
        alert("La Nota 5 debe ser un número válido.");
        return false;
    } else if (isNaN(note6) || note6 === "") {
        alert("La Nota 6 debe ser un número válido.");
        return false;
    }
    if (nombre === "" || Asignatura === "" || isNaN(note1) || isNaN(note2) || isNaN(note3) || isNaN(note4) || isNaN(note5) || isNaN(note6)) {
        alert("Error al enviar el formulario. Por favor, completa todos los campos correctamente.");
        return false;
    } else {
        alert("Formulario enviado con éxito.");
        return true; 
    }
}










