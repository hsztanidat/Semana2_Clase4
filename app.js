
const value = function (num) {
    if (num >= 1) {
      alert (1) 
    }else if (num <= -1) {
      alert(-1)
    }else if (num === 0) {
      alert(0)  
    }
  }
  
  const verify =  function () {
    let input = prompt("Ingrese un numero")
    if (Number(input)) {
      value(input)
      return input
  
    } 
    else {
      alert("Eso no es un numero")
      verify()
      
    }
  }
  
  
  verify()