export default function selectSort<T>(originList: Array<T>) {
  let originListIndex = 0;
  const originListLength = originList.length;

  /**
   * 外层循环从低往高走, 下标代表处理位置.
   */
  while (originListIndex < originListLength) {
    let innerIndex = originListIndex + 1;

    /**
     * 内层循环从外层循环的位置向前走, 下标代表处理位置.
     */
    while (innerIndex < originListLength) {
      
      /**
       * 处理位置元素和下一个元素比较, 如果条件成立, 则三方交换.
       */
      if (originList[originListIndex] > originList[innerIndex]) {
        const temp = originList[originListIndex];
        originList[originListIndex] = originList[innerIndex];
        originList[innerIndex] = temp;
      }

      console.count('running step')

      innerIndex++;
    }

    originListIndex++;
  }

  return originList;
}


console.log(selectSort([5,7,2,5,1,0]))