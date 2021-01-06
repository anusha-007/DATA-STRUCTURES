function runProgram(input) {

    input = input.trim().split("\n");
    let n = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);

    function compare(a,b){
        if(a<b){
            return -1
        }

        else{
            return 1
        }
    }

   arr.sort(compare)
   
   for(let j = 0; j < n; j = j+2){
       let temp = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = temp; 
   }
   console.log(arr);

   let dangerVal = 0;
   let dvar = 0;

   for(let i = 0; i < n; i++){
       if( i ==0 ){
           dval = Math.max( Math.abs( arr[i] - arr[i+1] ), Math.abs( arr[i] - arr[i+2] )  )
       }

       else{
           dval = Math.max( Math.abs( arr[i] - arr[i-1] ), Math.abs( arr[i] - arr[i+2] )  )

       }

       if(dval > dangerVal)
       {
           dangerVal = dval
       }
   }
    
   console.log(dangerVal);
}

if (process.env.USERNAME === "user") {
    runProgram(`4
    5 10 6 8`); 
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}