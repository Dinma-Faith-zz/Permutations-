const permutate = nums => {
    if (nums.length <= 2) return nums.length === 2 ? [nums, [nums[1], nums[0]]] : nums;
    return nums.reduce(
        (acc, item, i) =>
            acc.concat(
                permutate([...nums.slice(0, i), ...nums.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};
console.log(permutate([1, 2, 3]))