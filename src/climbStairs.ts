const cache = new Map();

/**
 * 站在第 N 个楼梯上, 向之前的楼梯看.  
 * 上一个楼梯, 到 N 之间一共有两种走法, 走一个和走两个对应的就是 N-1 和 N - 2
 * 对于 N-1 和 N-2 来说, 逻辑同上, 直到台阶为 1 和 2 的时候.
 * 
 * **注意**: 到台阶 2 返回 2 表示可以 1 1 或者 2 这两种方式, 但取决于题目, 是否允许第二个台阶可以按照 1 1 这种方式走
 */
export default function climbStairs(stairs: number) {
  if (stairs === 1) {
    return 1;
  } else if (stairs === 2) {
    return 2;
  } else if (cache.has(stairs)) {
    return cache.get(stairs);
  }

  const climbStairs1 = climbStairs(stairs - 1);
  cache.set(stairs - 1, climbStairs1);
  const climbStairs2 = climbStairs(stairs - 2);
  cache.set(stairs - 2, climbStairs2);

  return climbStairs1 + climbStairs2;
}

console.log(climbStairs(50));
