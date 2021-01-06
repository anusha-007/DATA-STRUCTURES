function runProgram(input){ 
    input = input.trim();
   input = input.split('\r\n');
   input.shift();
   for(let k = 0; k<input.length; k+=2){
      // var len = input[k]
       var str = input[k+1].trim();
      // console.log(str)
       var res = decrptString(str)
       console.log(res)
   }
   function decrptString(str){
       if(str.length === 1){
           return str
       }
       if(str.length === 0){
           return ""
       }
       let mid = Math.floor((str.length - 1)/2);
       let first_half = str.slice(0,mid)
       let sec_half = str.slice(mid + 1,(str.length - mid + 1));
       console.log(str.length-mid+1)
       return str[mid] + decrptString(first_half) + decrptString(sec_half)
   }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});