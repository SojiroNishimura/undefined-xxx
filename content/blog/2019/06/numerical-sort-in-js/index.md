---
title: Javascriptで数値配列をソートする
date: "2019-06-08 15:42:24"
description: 「Javascriptのsortは文字列比較でソートされる！」「な、なんだってー！！」
tags: ["Javascript"]
---

Javascriptには標準で`Array.sort`および`Array.reverse`が実装されているのでお手軽にソートを実行できる。と思いきやこいつらは数値配列をソートする場合は意図しない結果となることがあるので注意が必要である。

## Array.sortは文字列比較

Javascriptの`Array.sort`はデフォルトだと **「数値比較」ではなく「文字列比較」** で実行される。つまり数値配列に対して素朴に`Array.sort`を実行すると以下のようになる。

```javascript
const a = [1, 2, 10, 3, 11, 20, 12];
console.log(a.sort()); // [ 1, 10, 11, 12, 2, 20, 3 ] !!!????
```

期待する結果は`[1, 2, 3, 10, 11, 12, 20]`だが実行結果は1の後に10、11、12と続いている。これは各要素が文字列として比較されるためである。期待通りの結果を得るためには文字列比較ではなく数値比較を行う必要がある。

## Array.sortで降順ソート

`Array.sort`ではカスタムのComparator関数を引数に渡すことで独自の比較ロジックを実行することが出来る。今回は最もベーシックな降順/昇順ソートを試す。ちなみにここではComparatorとしてES6のArrow operatorを使って関数を定義している。

```javascript
const a = [1, 2, 10, 3, 11, 20, 12];
console.log(a.sort((a, b) => b - a)); // [ 20, 12, 11, 10, 3, 2, 1 ]
```

## Array.sortで昇順ソート

```javascript
const a = [1, 2, 10, 3, 11, 20, 12];
console.log(a.sort((a, b) => a - b)); // [ 1, 2, 3, 10, 11, 12, 20 ]
```

なおJavascriptの`Array.sort`は破壊的なソート[^1]なので注意する。

### 参考

http://rei19.hatenablog.com/entry/2013/08/24/133646

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

[^1]: 配列自体の内容が変更される。
