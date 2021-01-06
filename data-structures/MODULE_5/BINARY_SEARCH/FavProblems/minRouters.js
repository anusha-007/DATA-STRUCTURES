function runProgram(input) {
    input = input.trim().split("\n");

    let [no_of_houses, routers] = input.shift().split(" ").map(Number);
    let pos_of_the_houses = input.shift().trim().split(" ").map(Number).sort( (a,b) => a-b);

    function predicate(arr, mid, routers) {
       
        let router_counter = 1;
        let signal_coverage = arr[0] + (mid*2)

        for (let i = 0; i < no_of_houses; i++) 
        {
            if( arr[i] > signal_coverage ){
                router_counter += 1;
                signal_coverage = arr[i] + (mid*2)
            }
            

        }

        if( router_counter <= routers )
        {
            return true
        }

        else{
            return false
        }


        
    }

    function binarySearch(arr, routers) {
        let low = 0;
        let high = arr[arr.length - 1];

        let ans = 0;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if ( predicate( arr,mid, routers ) ) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }


    let ans = binarySearch(pos_of_the_houses, routers )
    console.log(ans)
}

if (process.env.USERNAME === "user") {
    runProgram(`3 2
    1 5 20`);
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
