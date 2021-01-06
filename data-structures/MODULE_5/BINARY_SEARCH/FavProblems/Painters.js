function runProgram(input) {
    input = input.trim().split("\n");

    let testCases = Number(input.shift());
    // console.log(testCases);



    function possibleToPaint( arr, boards, painters, mid )
    {   let painters_count =1;
        let sum = 0;

        for(let i = 0; i < boards; i++){
            sum = sum + arr[i]

            if( sum > mid ){
                painters_count += 1;
                sum = arr[i]
            }

        }

        if( painters_count <= painters ){
            return true
        }

        else{
            return false
        }
    }

    function binarySearch(arr,boards,painters) 
    {
        let sum =  arr.reduce((ac, ele) => ac + ele, 0);
        let max =  Math.max(...arr);
        let low = max;
        let high = sum
        //console.log(high,"sum", low)
        let ans = -1;
        while (low <= high) {
            let mid = low + Math.floor( (high - low) / 2);
           // console.log(mid, "mid")

            
            if ( possibleToPaint( arr, boards, painters , mid ) ) {
                //console.log(ans)
                ans = mid;
                high = mid - 1;
            } else {
                //console.log(mid, "in false")
                low = mid + 1;
            }
        }

        return ans;
    }

    for (let i = 0; i < testCases; i++) {
        let [boards, painters] = input.shift().trim().split(" ").map(Number);
        let arr = input.shift().trim().split(" ").map(Number);
        // console.log(arr, "Arrr");
        let ans = binarySearch(arr, boards, painters);
        console.log(ans );
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`2
    2 2
    1 10
    4 10
    1 8 11 3`);
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
