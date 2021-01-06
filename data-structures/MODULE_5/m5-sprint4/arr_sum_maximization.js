function runProgram(input) {
    input = input.trim().split("\n")
    let testCases = Number(input.shift() )




    function arr_sum(arr, arr_len){
       
        let max_sum = 0;
        for( let i = 0; i < arr_len; i++){
            let arr_new = [...arr]
            let fixed_ele = arr_new[i]
           
            for( let j = 0; j < arr_len; j++) {
                if( arr_new[j] < fixed_ele )
                {
                    arr_new[j] = arr_new[j]*-1
                }

                else
                {
                    arr_new[j] = fixed_ele
                }

            }
            let arr_sum = arr_new.reduce( (ac,ele) => ac + ele, 0 )
            if( max_sum < arr_sum ){
                max_sum = arr_sum
            }

        }
       
        return  max_sum

    }

    for( let i = 0; i < testCases; i++){
        let  arr_len = Number( input.shift() )
        let arr = input.shift().trim().split(" ").map(Number).sort( (a,b) => a-b )
        let ans = arr_sum(arr,arr_len)
        console.log(ans)
    }

}


if (process.env.USERNAME === "user") {
	runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5`);
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