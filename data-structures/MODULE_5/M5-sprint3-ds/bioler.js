function runProgram(input) {

    input = input.trim().split("\n")
    let str_len = Number(input[0])
   
    let str = input[1].trim()
    //console.log(str_len,str)

    let min_del_req = 0
    for( let i = 1; i < str_len; i = i+2){
        if( str[i] == str[i-1] )
        {
           
            var str_arr = str.split("")
            // str_arr.pop(i)
            delete str_arr[i]
            min_del_req += 1;

            // console.log(str_arr)
           //console.log(str_arr.length-min_del_req,"eln")
           if( (str_arr.length-min_del_req ) == 1){
               break
           }
            if( ( (str_arr.length-min_del_req) % 2 ) !== 0 ){
                delete str_arr[str_arr.length-1]
                //console.log(str_arr,"arr")
                min_del_req += 1;

            }
           

        }

    }

    console.log(min_del_req)
    if(min_del_req == 0){
        console.log(str)
    }

    else{
        
        console.log(str_arr.join(""))
    }
   
}
// a = [1,2,3]
// console.log( delete a[0], "Del")
// console.log(a.join(""))
// let a = "123"
// console.log(a.split(""))

if (process.env.USERNAME === "user") {
	runProgram(`2
    aa`);
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