alert("Bienvenid@ a celu compra")
//usuario del cliente
function usuario(){
let usuario = prompt("ingrese nombre de usuario")
let password = prompt("insert password")
 if (usuario === "Juantomas" && password === "jt1747"){
    alert("Bienvenido " + usuario)
 } else {
   alert('El usuario y/o password son incorrectos, por favor inicie sesion ')
 }
}
usuario()

//si quieren ver nuestros iphones
let IVA = 1.21
let consulta = confirm("Deseas saber que iphones tenemos?")
if (consulta === true){
   alert('tenemos el iphone 12, iphone 13 y iphone 14 ')
   let ver = confirm("Deseas comprar alguno de estos celulares?")
      if (ver === true){
         let celular = prompt("Que celular deseas comprar?")
         switch(celular){
            case 'Iphone 12':
            let compra = confirm("deseas comprar este iphone por un precio de $1500 mas IVA?")
            if (compra === true ){
               let impuesto = 1.10
               let venta = 1500 * IVA
               let c3 = venta / 3
               let c6 = venta / 6
               let c9 = (venta / 9)* impuesto

               alert("Este seria el precio con IVA: " + "$" + venta)
               let cuotas = confirm("Deseas pagar en cuotas?")
               if (cuotas === true){
                  alert("Podes pagar en 3 y 6 sin interes o 9 con un %10 de interes mensual")
                  let cuotas = parseInt(prompt("En cuantas cuotas deseas pagar"))
                  switch (cuotas){
                     case 3:
                        alert("Debera pagar un total de: " + "$" + c3 + " por mes durante 3 meses" )
                        break;
                     case 6:
                        alert("Debera pagar un total de: " + "$" + c6 + " por mes durante 6 meses" )
                        break;
                     case 9:
                        alert("Debera pagar un total de: " + "$" + c9.toFixed(2) + " por mes durante 9 meses" )
                  }
               } else{
                  alert("No hay problema, gracias por su compra!")
               }
            } else{
               alert("No hay problema, avisame si quieres algun otro")
            }
            break;

            case 'Iphone 13':
               let compr = confirm("deseas comprar este iphone por un precio de $1830 mas IVA?")
               if (compr === true ){
                  let impuesto = 1.10
                  let venta = 1830 * IVA
                  let c3 = venta / 3
                  let c6 = venta / 6
                  let c9 = (venta / 9)* impuesto
   
                  alert("Este seria el precio con IVA: " + "$" + venta.toFixed(2))
                  let cuotas = confirm("Deseas pagar en cuotas?")
                  if (cuotas === true){
                     alert("Podes pagar en 3 y 6 sin interes o 9 con un %10 de interes mensual")
                     let cuotas = parseInt(prompt("En cuantas cuotas deseas pagar"))
                     switch (cuotas){
                        case 3:
                           alert("Debera pagar un total de: " + "$" + c3.toFixed(2) + " por mes durante 3 meses" )
                           break;
   
                        case 6:
                           alert("Debera pagar un total de: " + "$" + c6.toFixed(2) + " por mes durante 6 meses" )
                           break;
                        case 9:
                           alert("Debera pagar un total de: " + "$" + c9.toFixed(2) + " por mes durante 9 meses" )
                     }
                  } else{
                     alert("No hay problema, gracias por su compra!")
                  }
               } else{
                  alert("No hay problema, avisame si quieres algun otro")
               }
               break;

               case 'Iphone 14':
                  let comp = confirm("deseas comprar este iphone por un precio de $2190 mas IVA?")
                  if (comp === true ){
                     let impuesto = 1.10
                     let venta = 2190 * IVA
                     let c3 = venta / 3
                     let c6 = venta / 6
                     let c9 = (venta / 9)* impuesto
      
                     alert("Este seria el precio con IVA: " + "$" + venta.toFixed(2))
                     let cuotas = confirm("Deseas pagar en cuotas?")
                     if (cuotas === true){
                        alert("Podes pagar en 3 y 6 sin interes o 9 con un %10 de interes mensual")
                        let cuotas = parseInt(prompt("En cuantas cuotas deseas pagar"))
                        switch (cuotas){
                           case 3:
                              alert("Debera pagar un total de: " + "$" + c3.toFixed(2) + " por mes durante 3 meses" )
                              break;
                           case 6:
                              alert("Debera pagar un total de: " + "$" + c6.toFixed(2) + " por mes durante 6 meses" )
                              break;
                           case 9:
                              alert("Debera pagar un total de: " + "$" + c9.toFixed(2) + " por mes durante 9 meses" )
                        }
                     } else{
                        alert("No hay problema, gracias por su compra!")
                     }
                  } else{
                     alert("No hay problema, avisame si quieres algun otro")
                  }
         }
      }else{
         alert("Sigue recorriendo nuestra tienda!")
      }
   
}

/*    console.log(celulares[0])
*/

  


