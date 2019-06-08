---
title: Javascriptでアルファベット配列をスマートに定義する
date: "2019-06-08 14:40:21"
description: Javascriptでアルファベット配列を作りたい諸兄に送る珠玉のSnippet
tags: ["Javascript"]
---

プログラミングコンテスト(プロコン)やオンラインのプログラミング学習サイトなどの問題を解く時、アルファベット配列が必要になる場合がある。

JavascriptにはRubyやPythonなどのように範囲指定子がないので自力で定義してやる必要があるが、どうせならできるだけスマートに実装したいところである。

## 方法1

```javascript
const a = ['a', 'b', ..., 'y', 'z'];
```

最も素朴な方法。まぁスマートではない。

## 方法2

```javascript
const c = 'a'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => {
  return String.fromCharCode(c + i);
});
```

Programmaticallyにアルファベット配列を生成してみる。ここでのポイントは`Array.apply`で配列を生成していることである。こうすることで`undefined`で初期化された配列が生成され、その後の`map`処理が適切に実行される。単に`new Array(26).map`とすると空の配列が生成されるため`map`が実行されないという問題が発生する。

## 方法3(おまけ)

```javascript
function makeAlphabetsBetween(start, end) {
  const s = start.charCodeAt(0);
  const e = end.charCodeAt(0);
  const num = (e - s) + 1;
  return Array.apply(null, new Array(num)).map((_, i) => {
    return String.fromCharCode(s + i);
  });
}
const a = makeAlphabetsBetween('g', 'n');
console.log(a); // ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
```

任意の開始文字と終了文字を指定してその間に出現する文字の配列を生成するサンプル。エラーケースは考慮してないので必要に応じて各自で実装されたし。

### 参考

https://stackoverflow.com/questions/12376870/create-an-array-of-characters-from-specified-range

https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery
