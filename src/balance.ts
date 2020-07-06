

/**
 * 给定 8 个物品, 其中有一个是次品(比其他的轻), 最少称多少次可以找到次品.
 * 
 * 必须将物品分为三组:
 * 8 / 3 = 2 余数 2 每组的个数为:
 * 3 3 2
 * 
 * 如果是 9 个物品则可以分为:
 * 3 3 3 
 * 
 * 如果是 10 个物品则分为:
 * 3 3 4
 * 
 * 始终分为三组, 且其中两组的个数必须相等.
 * 
 * 接下来就是比较, 值比较相等的两组:
 * 1. 如果两组比较存在一组比一组小的情况则说明小的一组存在次品
 * 2. 如果两组相等, 说明次品在没有比较的一组中
 * 3. 获取到小的一组, 根据上述规则继续比较.
 * 
 * 如果是有3个物品, 则需要比较1次
 * 如果是有9个物品, 则需要比较2次
 * 如果是有27个物品, 则需要比较3次.
 * 
 * 4 在 (3,9)之间, 第一次分组会出现不均等的情况, 则不均等的情况还需要进行额外比较
 * 8 在 (3,9)之间, 第一次分组会出现不均等的情况, 则不均等的情况还需要进行额外比较
 * 10 在 (9,27)之间, 第一次分组会出现不均等的情况, 则不均等的情况还需要进行额外比较
 * 
 * 而比较次数和 3 次方存在关联:
 * 个数 1 2 3 <= 3^1 则只需要比较一次.
 * 个数 4 5 6 7 8 9 <= 3^2 只需要比较两次
 * 个数 [10,27] <= 3^3 则只需要比较三次
 * 3^4 = 81
 * 3^5 = 243
 * 3^6 = 729
 * 3^7 = 2187
 */