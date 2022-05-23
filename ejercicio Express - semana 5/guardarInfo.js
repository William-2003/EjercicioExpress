const fs = require('fs')


const  agregar = (_fullname,_email,_password) => {

    // leer el archivo 
    fs.readFile('usersData.js',(err, data)=>{
        if(err){
            throw err
        }
        var datos_rec = data.toString()
   
        var marca = 0

        //lee el texto de final a inicio para saber donde termina el array de los dato
        for(var i = datos_rec.length; i >= 0 ; i -- ){

            if(datos_rec[i]=== "]" ){
                marca = i
                //rompe el for para que no siga buscando el caracter
                break
            }    
        
        }

        //prepara el dato para ser guardado 
        var corte = datos_rec.slice(0,marca-1)// corta el texto a donde termina el array
        var nuevo_dato = ", \n { \n fullname:'"+ _fullname + "', \n email:'"+ _email +"', \n password:'"+ _password +"' \n } " // guarda el los datos ingresado como un diccionario de texto
        var datos = corte+nuevo_dato+"]; \n module.exports = { data }" //une todo para que sea guardado todo como texto
        


       // escribe en la pagina de datos 
        fs.writeFile('usersData.js',datos,(err)=>{
            if(err){
                throw err
            }
        })
  

    })

}

//escribir("a","b","c")
module.exports = {agregar}