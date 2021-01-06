const { func } = require("prop-types")

function runProgram(input) {
  input = input.trim().split("\n")
  
  const [no_of_machines, items_needed] = input.shift().trim().split(" ")
//   console.log(no_of_machines , items_needed)

  let machines_arr = input.shift().trim().split(" ").map(Number)
//   console.log(machines_arr, "Arr");

    function predicate( arr, mid){
        let total_days = 0;
        for( let i = 0; i < no_of_machines; i++ ){
            total_days += Math.floor( (mid/arr[i]) )

        }
        if( total_days  >= items_needed){
            return true
        }
        else{
            return false
        }
    }
    function machines_at_work(arr)
    {
        let low = 0;
        let high = Math.max(...arr) * items_needed

        let ans = -1;
        while( low <= high ){
            let mid = low + Math.floor( (high - low)/2 )

            if( predicate( arr,mid ) ){
                ans = mid
                high = mid - 1 ;
            }

            else{
                low = mid + 1;
            }
        }
        return ans
    }

   console.log( machines_at_work(machines_arr) )
}


if (process.env.USERNAME === "user") {
    runProgram(`2 5
        2 3`);
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