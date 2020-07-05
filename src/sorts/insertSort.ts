export default function insertSort<T>(originList: Array<T>) {
  // 外层循环下标向前走
  let originListIndex = 1;
  const originListLength = originList.length;

  /**
   * 外层循环从低往高走, 下标代表处理次数.
   */
  while (originListIndex < originListLength) {
    // 内层循环在当前循环前后遍历
    let innerIndex = originListIndex;

    /**
     * 内层循环从处理次数往低走, 下标代表处理位置.
     */
    while (innerIndex > 0) {
      
      /**
       * 处理位置和前一个元素比较, 如果条件成立则三方交换.
       */
      if (originList[innerIndex] > originList[innerIndex - 1]) {
        const temp = originList[innerIndex];
        originList[innerIndex] = originList[innerIndex - 1];
        originList[innerIndex - 1] = temp;
      }

      console.count('running step')

      innerIndex--;
    }

    originListIndex++;
  }

  return originList;
}


console.log(insertSort([5,7,2,5,1,0]));
