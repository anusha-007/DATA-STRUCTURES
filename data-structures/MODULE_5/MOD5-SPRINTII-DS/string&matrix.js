function runProgram(input) {

    input = input.trim().split("\n");
    let testCases = Number( input.shift() );

    for(let j = 0; j < testCases; j ++){
        let matrix_dimensions = input.shift().trim().split(" ").map(Number)
    let [n , m] = matrix_dimensions

   
    const matrix = []
    //looping through rows
    for(let i = 0; i < n; i++){
        let str = getObj(input.shift().trim().split(""))
        matrix.push(str)


    }

    let searchStr = input.shift().trim()
    let found = true;

    for(let k = 0; k < searchStr.length; k++){
        let mod = k%n;
        if(matrix[mod][searchStr[k]] > 0){
            matrix[mod][searchStr[k]] --
        }

        else{
            found = false;
            break
        }
    }

    if(found){
        console.log("Yes")
    }
    else{
        console.log("No")
    }


    }
    



    function getObj(arr){
        
        let obj = { };

        for(let i = 0; i < arr.length; i++){
            if( obj[ arr[i] ] > 0 ){
                obj[arr[i]] = obj[arr[i]] + 1

            }

            else{
                obj[arr[i]] = 1;
            }
        }
       
        return obj
    }
    
    //for()
}


if (process.env.USERNAME === "user") {
	runProgram(`2
    3 3
    aba
    xyz
    bdr
    axbaydb
    3 3
    aba
    xyz
    bdr
    axbaydb
   
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