function runProgram(input) {

     input = input.trim().split("\n");
      let testCases = Number(input[0]);
      

      let pos = 1;
      for(let i = 0; i < testCases; i++)
      {
          let capacity_details = input[pos++].trim().split(" ").map(Number);
          
          let capacity = capacity_details[0];
          let arr_len = capacity_details[1];
         
          let weights = [];
          let values = [];

          for(let j = 0; j < arr_len; j++){
              let wg_val_arr = input[pos++].trim().split(" ").map(Number);
              weights.push(wg_val_arr[0]);
              values.push(wg_val_arr[1]);
             
          }
          
          let ans = steal_things({capacity,arr_len,weights,values})

          console.log(ans);
          
      }

}

function steal_things({capacity,arr_len,weights,values}){

    
    //find profit ratios by values/weights

    let profit_ratio_arr = [];
    for(let i = 0; i < arr_len; i++)
    {
        let ratio = values[i]/weights[i];
        profit_ratio_arr.push( [i,ratio] )

    }

    //now sort ratios in descending order
    profit_ratio_arr.sort( (a,b) => b[1]-a[1])
    

    let rem_wg = capacity;
    let max_value = 0;
    //looping through profit_ratio_arr
    for(let j = 0; j < profit_ratio_arr.length; j++)
    {
        let take_ind = profit_ratio_arr[j][0];

        let wg = weights[take_ind];
        let val = values[take_ind];

        if( val > 0 ){
            if(rem_wg < wg){
                break;
            }
            else{

                rem_wg = rem_wg-wg;
            max_value += val;
            }
            
        }

    }

    return max_value;
    


}




if (process.env.USERNAME === "user") {
    runProgram(`
            1
        4 5
        1 8
        2 4
        3 0
        2 5
        2 3
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
