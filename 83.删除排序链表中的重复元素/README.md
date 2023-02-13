给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

* 由于所提供的链表是已经排好序的，所以只需要比较相邻节点是否重复，跳过重复节点即可

```js
let cur = head

// 如果含有next，则一直循环下去
while (cur.next) {
  if (cur.val === cur.next.val) {
    cur.next = cur.next.next
  } else {
    cur = cur.next
  }
}
```

* 考虑到 如果 提供的链表是没有经过排序的，可以创建一个`hash`表，记录每个值的出现次数，然后遍历链表，如果出现次数大于1，则删除该节点

```js
let hash = {}

if (hash[cur.val]) {
  pre.next = cur.next
  cur = cur.next
} else {
  hash[cur.val] = true
  pre = cur
  cur = cur.next
}
```