function promediar() {
    let nota1 = +document.querySelector('#nota1').value;
    let nota2 = +document.querySelector('#nota2').value;
    let nota3 = +document.querySelector('#nota3').value;
    let mostrar = document.querySelector('#salida');
    let promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);

    if (promedio >= 6 && promedio <=10){
        mostrar.textContent = promedio.toFixed(2) + ' - Está aprobado';
    }else if (promedio >= 1 && promedio < 6){
        mostrar.textContent = promedio.toFixed(2) + ' - Está reprobado';
    }else{
        mostrar.textContent = 'Ingrese una nota válida'
    }
}