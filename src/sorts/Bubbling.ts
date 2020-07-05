

export default function Bubbling<T>(originList: Array<T>) {

  let originListIndex = 0;
  // 注意这里需要减一, 因为最后到达列表末尾后就没有下一位可以进行比较了
  const originListLength = originList.length - 1;

  /**
   * 外层循环从低往高走, 下标代表处理次数.
   */
  while (originListIndex < originListLength) {

    let innerIndex = 0;
    /**
     * 内层循环从低往高走, 下标代表处理位置.  
     * 每次执行的次数都是总个数减去处理次数.
     */
    while (innerIndex < originListLength - originListIndex) {

      /**
       * 当前元素和下一个元素进行比较,
       * 条件成立则三方交换.
       */
      if (originList[innerIndex] < originList[innerIndex + 1]) {
        let temp = originList[innerIndex];
        originList[innerIndex] = originList[innerIndex + 1];
        originList[innerIndex + 1] = temp;
      }

      console.count('running step')

      innerIndex++;
    }


    originListIndex++;
  }

  return originList;

}


console.log(Bubbling([5,7,2,5,1,0]));
