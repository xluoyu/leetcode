<details>
  <summary>原题</summary>
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  

  示例 1：
  ```
  输入：s = "()"
  输出：true
  ```
  示例 2：
  ```
  输入：s = "()[]{}"
  输出：true
  ```
  示例 3：
  ```
  输入：s = "(]"
  输出：false
  ```
  示例 4：
  ```
  输入：s = "([)]"
  输出：false
  ```
  示例 5：
  ```
  输入：s = "{[]}"
  输出：true
  ```
</details>


## 解法：栈
我们先创立一个map，他记录了所有括号的左侧值。

之后维护一个后进先出的栈，用来记录括号的顺序。

遍历字符串，如果是左括号，则将其压入栈中，如果是右括号，则判断栈顶元素是否与当前右括号匹配，如果匹配，则弹出栈顶元素，否则返回false。

```js
var isValid = function(s) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (map[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
};
```

## 解法：字符串过滤 (偷鸡)

不断的对字符串进行过滤，直到字符串为空。

```js
var isValid = function(s) {
  while (true) {
    let length = s.length;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    if (length === s.length) {
      return length === 0;
    }
  }
};
```