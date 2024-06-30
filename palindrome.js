const input = document.getElementById('text-input')
const button = document.getElementById('check-btn')
const result = document.getElementById('result')



function checkIfPalindrome(input){

    const originalInput = input //Guardar para usar despues el output

    //si no pone ningun valor en el input: 
    if (input === ""){
        //saldra esto en la consola:
        console.log('you have to put a value')

        alert("Please input a value")

        return 
    
    }

    /*l método replaceChildren() se utiliza para:

Eliminar todos los hijos de un elemento.
Reemplazar todos los hijos de un elemento con nuevos elementos.

En esto caso elimina el resultado anterior: */
result.replaceChildren()


//vamos a utlizar input que es el string utlizado anteriormente
//replace:  Este método reemplaza parte de una cadena de texto con otro texto.
// las barras fuera de los corchetes es aexpresion regex (es una secuencia de caracteres que define un patrón de búsqueda.)
//Por otro lado el simbolo ^ se refiere a un conjunto de caracteres negado. Coincide con cualquier carácter que NO esté dentro de los corchetes.
//En conjunto, [^A-Za-z0-9] coincide con cualquier carácter que no sea una letra o un número.
//el caracter g significaque se buscarán todas las coincidencias en lugar de detenerse en la primera.
// el caracter i significa que la búsqueda no distingue entre mayúsculas y minúsculas.
//'': Los caracteres que coinciden con la expresión regular serán reemplazados por una cadena vacía, es decir, serán eliminados.
//En resumen, input.replace(/[^A-Za-z0-9]/gi, '') elimina todos los caracteres de input que no sean letras o números.
// El metodo toLowerCase convierte todas las letras en minuscula
const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();


//VAMOS A PONER LO QUE SE VA A DESPLEGAR:
//vamos a poner en negrita el input que ponemos en html para ello tenemos que poner ya las comillas
//En el segundo renglon verificamos si la variable lowerCastring el reverso de lowerCaseSting. Si es el reverso entonces si es un palindrome si no, no es un palindrome

  let resultMsg = `<strong class="originalInput"> ${originalInput} </strong>   
  ${lowerCaseStr === [...lowerCaseStr].reverse().join('')?'is' : 'is not'
  } a palindrome. By the way I love you mi amor.`;

//Para que surja efecto el texto anterior hay que trasladarlo a HTML
const resultText = document.createElement('h1')
resultText.className = 'user-input'
resultText.innerHTML = resultMsg

//appendChild() es utilizado para insertar un nuevo elemento HTML como hijo de otro elemento existente en la página.
//es decir se inserta un nuevo elemento de en result
result.appendChild(resultText)


 // Show the result.


  
   
}

//----------------------------------------------

button.addEventListener('click', () =>{
    checkIfPalindrome(input.value)
  
  
})

    









     
  
  



