function additionDoesOverflow(a, b) {
    var c = a + b;
   
    return a !== c-b || b !== c-a;
  }


 let a =  additionDoesOverflow(2369423776279269129974174921141719,1000)

 console.log(a);