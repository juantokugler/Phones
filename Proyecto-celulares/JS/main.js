alert("Bienvenid@ a Mates Bien Argentino")

function sesion() {
   const admin = {
      user: "Juantomas",
      contasenia: "jt1747"
   }
   let userInicial = prompt("Ingrese su nombre de usuario").trim()
   let letraInicial = userInicial.substring(0, 1).toUpperCase()
   let restoPalabra = userInicial.substring(1, userInicial.length).toLowerCase()
   let user = letraInicial + restoPalabra
   let password = prompt("Ingrese su contrasenia")
   if(user === admin.user && password === admin.contasenia){
      alert("Bienvenido " + admin.user)
   } else {
      alert("El usuario y/o password son incorrectos, por favor inicie sesion")
   }
}
sesion()

//buscar
function buscarProductos() {
   let id = parseInt(prompt("Que esta buscando?"))
   let resultado = productos.find((producto)=> producto.id === id)
   if (resultado === undefined) {
       alert("no existe")
   } else{
       console.table(resultado)
   }
}
buscarProductos()

//filtrar
function filtrarProducto() {
   let presupuesto = parseInt(prompt("Que presupuesto tienes?"))
   let productosQuePodesComprar = productos.filter((producto)=> {
       return producto.importe <= presupuesto
   })
   if (productosQuePodesComprar.length > 0) {
      console.table(productosQuePodesComprar)
   }
}
filtrarProducto()


//si quieren ver nuestros productos

let IVA = 1.21
let consulta = confirm("Deseas saber que tenemos?")
if (consulta === true){
   alert('tenemos el Vasos, Mates, Termo 1L ')
   let ver = confirm("Deseas comprar alguno de estos productos?")
      if (ver === true){
         let producto = prompt("Que producto deseas comprar?")
         switch(producto){
            case 'Vaso':
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

            case 'Mate':
               let compr = confirm("deseas comprarlo por un precio de $1830 mas IVA?")
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

               case 'Termo 1L':
                  let comp = confirm("deseas comprar este Termo por un precio de $2190 mas IVA?")
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


