// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);


function positiveSum (arr) {
    return arr.reduce((s, e) => {
        return e >= 0 ? s + e : s;
    }, 0)
}

  let nums = [1,2,3,4,5];

  console.log(positiveSum(nums))