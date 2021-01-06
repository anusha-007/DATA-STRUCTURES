function runProgram(input) {

    input = input.trim().split("\n");
    let [arrLen, key] = input.shift().split(" ").map(Number)

    let rotatedArr = input.shift().trim().split(" ");
    
    let obj = {}
    for(let i = 0; i < arrLen ; i++){
        obj[ rotatedArr[i] ] = i
    }

    // console.log(obj)
    function Search(arr,arrLen,key){
         arr.sort( (a,b) => a - b);
         arr = arr.map(Number)
         let low = 0;
         let high = arrLen - 1;

         while( low <= high){
             let mid = low + Math.floor( (high - low)/2 )

             if(arr[mid] == key){
                 return arr[mid]
             }

             else if ( arr[mid] > key){
                 high = mid - 1
             }

             else{
                 low  = mid + 1;

             }
         }
         return -1;
    }
    
    let ans = Search(rotatedArr,arrLen,key)
    // console.log(ans)

    let found = false
    for(let key in obj){
        if( key == ans){
            console.log(obj[key])
            found = true
        }
        
    }

    if(!found){
        console.log(-1)
    }

   
}


if (process.env.USERNAME === "user") {
	runProgram(`6 6
    3 4 7 9 1 2
    `);
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