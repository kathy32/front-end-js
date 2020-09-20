// JS格式化数字（每三位加逗号）
// 参考：https://blog.csdn.net/sushauai/article/details/52958162
 // 方法一
 function toThousands(num) {
  var result = [ ], counter = 0;
  num = (num || 0).toString().split('');
  for (var i = num.length - 1; i >= 0; i--) {
      counter++;
      result.unshift(num[i]);
      if (!(counter % 3) && i != 0) { result.unshift(','); }
  }
  return result.join('');
}