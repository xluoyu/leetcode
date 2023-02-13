求数组内所能构成容器的最大面积

一个维度是高，即所构成容器的两个数值中的较小值。

一个维度是长，即所构成容器的两个数值的下标差。

## 思路一：双重ｆｏｒ循环

```js
var maxArea = function(height) {
  let area = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      area = Math.max(area, Math.min(height[i], height[j]) * (j - i))
    }
  }

  return area
};
```

时间超了...

## 思路二： 双指针

从数组两边开始向内推，每次只移动指针对应的较小的一段，每次循环都更新最大面积。

```js
let i = 0, j = height.length - 1;
let res = 0
while (i < j) {
    res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
    // 比大小， 移动小的一边
    if (height[i] <= height[j]) {
        i++
    } else {
        j--
    }
}
return res
```