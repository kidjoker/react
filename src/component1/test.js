const nums = ["alice","bob","charlie","danielle"]
const result = nums.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(result)
