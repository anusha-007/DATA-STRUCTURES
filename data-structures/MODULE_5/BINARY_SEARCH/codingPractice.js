function runProgram(input) {
    input = input.trim().split("\n");
    const [problems, days] = input.shift().split(" ").map(Number);

    const arr = input.shift().trim().split(" ").map(Number);

    function predicate(arr, mid, n, days){
        var sum = 0;
        var days_req = 0;

        for(let i =0 ; i < n ; i ++ )
        {
           sum = sum + arr[i]
           if( sum > mid ){
               days_req ++;
               sum = arr[i]
           }
        }


        if(sum < mid ){
            days_req = days_req + 1
        }

        if( sum > mid ){
            days_req = days_req + Math.floor( sum/mid )
            if( (sum%mid) !== 0){
                days_req = days_req + 1
            }
            
        }

        if( days_req <=  days){
            return true
        }
        else{
            return false
        }

    }

    const codingPractice = (arr, problems, days) => {
        let low = Math.max(...arr);
        let arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
        let high = arrSum(arr);
        var ans = -1

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            let min_days = predicate(arr, mid,problems,days);

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
    runProgram(`5 1
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
