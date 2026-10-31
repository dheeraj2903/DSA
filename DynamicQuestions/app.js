//Question: Tumhe n stairs climb karni hain. Har baar 1 ya 2 steps le sakte ho. Total kitne different ways hain?
function climbStairs(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// console.log(climbStairs(4)); 

//Fibonacci series ka n-th number find karo
function fib(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 0;

    if (n >= 1) dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// console.log(fib(6)); 


//Minimum Cost Climbing Stairs
//Har stair par ek cost hai. Tum 1 ya 2 steps chadh sakte ho. Top tak pahunchne ka minimum cost find karo. Starting index 0 ya 1 se kar sakte ho
function minCostClimbingStairs(cost) {
    let n = cost.length;

    let dp = new Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(
            dp[i - 1] + cost[i - 1],
            dp[i - 2] + cost[i - 2]
        );
    }

    return dp[n];
}

// console.log(minCostClimbingStairs([10, 15, 20])); // 15


//House Robber
//Houses ki array di hai. Har house mein kuch money hai. Adjacent houses ko rob nahi kar sakte. Maximum money find karo.
function rob(nums) {
    let n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let dp = new Array(n).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[i]
        );
    }

    return dp[n - 1];
}

// console.log(rob([2, 7, 9, 3, 1])); // 12


//Coin Change
//Coins ke denominations diye hain. Target amount banane ke liye minimum kitne coins chahiye?
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1
                );
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3