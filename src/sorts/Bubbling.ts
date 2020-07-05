

export default function Bubbling<T>(originList: Array<T>) {

  let originListIndex = 0;
  // 注意这里需要减一, 因为最后到达列表末尾后就没有下一位可以进行比较了
  const originListLength = originList.length - 1;

  /**
   * 外层循环仅仅是从0到列表长度的循环而已.
   * 作用仅仅是控制外部循环的次数.
   */
  while (originListIndex < originListLength) {

    let innerIndex = 0;
    /**
     * 外层循环每走一步, 内层循环次数减一.
     */
    while (innerIndex < originListLength - originListIndex) {

      // 如果条件成立, 则三方交换
      if (originList[innerIndex] < originList[innerIndex + 1]) {
        let temp = originList[innerIndex];
        originList[innerIndex] = originList[innerIndex + 1];
        originList[innerIndex + 1] = temp;
      }

      innerIndex++;
    }


    originListIndex++;
  }

  return originList;

}


console.log(Bubbling([4,5,1,6,7]));
