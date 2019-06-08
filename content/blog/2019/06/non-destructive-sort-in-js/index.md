---
title: Javascriptで非破壊ソートを実装する
date: "2019-06-08 15:42:51"
description: スプレッド演算子を使いこなそう
tags: ["Javascript"]
---

[Javascriptで数値配列をソートする](../numerical-sort-in-js)でも少し触れたが、Javascriptの`Array.sort`は破壊的なソートなので、配列そのものの値を変更してしまう。
それでも問題ないこともあるが、うっかり配列を破壊してしまうことによって容易にバグが発生し得るうえ、その手のバグは往々にして発見しづらいので厄介だ。何よりFunctional Programming的な観点で言うと無駄な副作用の発生は極力避けたいところである。

ということで今回はJavascriptで非破壊ソートを実装してみる。

## Array.slice()で配列をコピー

元の配列を変更しないようにするためには、元の配列をコピーしてコピー後の配列をソートすればよい。ざっと検索してみると数年前までは以下のような`Array.slice()`でコピーした配列をソートすることで非破壊ソートするのが主流だった模様。

```javascript
const arr = [3, 2, 8, 4, 6, 1, 3, 20, 14];
console.log(arr.slice().sort((a, b) => a - b)); // [ 1, 2, 3, 3, 4, 6, 8, 14, 20]
console.log(arr); // [ 3, 2, 8, 4, 6, 1, 3, 20, 14 ]
```

## Object.assignで配列をコピー

ES6から`Object.assign`メソッドによるオブジェクトのコピーができるようになったので、今後はこっちの書き方も目にする機会が増えてくると思われる。今回は配列のコピーだが実際にはオブジェクトのコピーをする場合に目にすることの方が多いはず。

```javascript
const arr = [3, 2, 8, 4, 6, 1, 3, 20, 14];
console.log(Object.assign([], arr).sort((a, b) => a - b)); // [ 1, 2, 3, 3, 4, 6, 8, 14, 20]
console.log(arr); // [ 3, 2, 8, 4, 6, 1, 3, 20, 14 ]
```

`Object.assign`は第1引数のオブジェクトに第2引数の直接所有かつ列挙可能な要素をコピーする。上記の例では空の配列に第2引数の配列の全要素をコピーした新しい配列を呼び出し元に返すという意味になる。

## スプレッド演算子(...)を使う

`Object.assign`を使う方法は配列だけじゃなくオブジェクトにも汎用的に使えるので知っておくと便利だが、配列のことだけを考えるとスプレッド演算子を使うのがやはりベストである。今後はこの書き方が主流になるだろう。

```javascript
const arr = [3, 2, 8, 4, 6, 1, 3, 20, 14];
console.log([...arr].sort((a, b) => a - b)); // [ 1, 2, 3, 3, 4, 6, 8, 14, 20]
console.log(arr); // [ 3, 2, 8, 4, 6, 1, 3, 20, 14 ]
```

### 参考

https://utano.jp/entry/2015/06/javascript-array-sort-non-destructive

Array.sliceの仕様にも触れられており調べた中では一番わかりやすかった

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8

スプレッド演算子のとてもよいまとめ
