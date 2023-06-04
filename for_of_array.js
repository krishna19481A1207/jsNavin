let nums = [];
nums[0]=5
nums[99] = 100
//for(let n of nums)
//{
  //  console.log(n)
//}

for(let key in nums)
{
    console.log(key)
}
for(let key in nums)
{
    console.log(nums[key])
}