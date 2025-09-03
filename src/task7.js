const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  console.log("¿Pueden agregar un solo número a una fila existente?");
  arr[2].splice(10,0,30);
  console.log(arr);
  console.log("¿Pueden agregar una fila completa de números?");
  const arrAdd = [30,31,32,33,34,35,36,37,38,39];
  arr[3] = arrAdd;
  console.log(arr);
  console.log("¿Pueden eliminar un solo número de una fila específica?");
  arr[2].splice(10);
  console.log(arr);
  console.log("¿Pueden invertir una de las filas sin afectar a las demás?");
  arr[0].reverse();
  console.log(arr);
  
  // Type your code above this line!