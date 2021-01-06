function runProgram(input) {
    const [time, k] = input.trim().split(" ").map(Number)
    console.log(time,k)


    function recursion(value, height){
        console.log(k ,"k",value )
        let p = 1;
        let ans = 0;
        // let ans = Math.floor( height/(k**p) )
        if( () )
        {
            console.log(value, "value")

            return ans
            
        }

        else
        {
            console.log(ans, p , "ans")
           
            ans += value
        }
        return recursion( Math.floor( (height)/(k**(p++)) ) , height)

    }

    function predicate(time, k ,mid ){
        time_taken =  mid + recursion( Math.floor(mid/k**1), mid )
        if( time_taken >= time)
        {
            return true
        }
        else
        {
            return false
        }

    }

    function binarySearch(time,k){
        let low = 1;
        let high = 10000;

        let mid = low + Math.floor( (high - low)/2 )
        let ans = -1
        if( predicate(time,k,mid) )
        {
            ans = mid
            high = mid - 1
        }

        else{
            low = mid + 1;
        }
    } 
   let ans =  binarySearch( time, k )
   console.log(ans)


}


if (process.env.USERNAME === "user") {
	runProgram(`7 2`);
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