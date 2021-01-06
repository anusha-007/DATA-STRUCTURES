function runProgram(input) {
    input = input.trim().split("\n");
    
    let [problems, days] = input.shift().split(" ").map(Number);

    
    let arr = input.shift().trim().split(" ").map(Number);
    
    function predicate(arr, mid, n, days,arrSum){
       // var sum = arr[0];
        //var days_req = 0;

       let solve_time = mid * days;
       console.log(solve_time,"hii",arrSum)
      if( solve_time >= arrSum ){
          console.log(solve_time)
       
            return true
        }
        else{
            return false
        }

    }

    let codingPractice = (arr, problems, days) => {
        let low = Math.max(...arr);
         var arrSum = (arr) => arr.reduce((a, b) => a + b, 0);

        let high = arrSum(arr);
       
        let ans = -1

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            let min_days = predicate(arr, mid,problems,days, high);

            if (min_days) {
                ans = mid
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans
    };

    let ans = codingPractice(arr, problems, days);
    console.log(ans)
}

if (process.env.USERNAME === "user") {
    runProgram(`5 3
    1 2 2 1 3`);
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
