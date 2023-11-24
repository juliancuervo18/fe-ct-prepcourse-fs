/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   resultSuma = (x + y);
   return resultSuma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   resultrest = (x - y);
   return resultrest;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   resultdiv = (x / y);
   return resultdiv;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   resultm = (x * y);
   return resultm;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resultres = (x % y);
   return resultres;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
