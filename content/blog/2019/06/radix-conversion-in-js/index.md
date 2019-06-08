---
title: Javascriptで数値を2進数/8進数/16進数に変換する
date: "2019-06-08 15:42:05"
description: Number.toString()を使いこなそう
tags: ["Javascript"]
---

プログラミング問題でありがちな「数値を2進数に変換してごにょごにょする」という処理をJavascriptでやる方法。検索してみても意外と日本語のまとまった情報が見つけられなかったので一通りまとめておく。

## 基数変換はNumber.toStringを使う

基本的には`Number`クラスの`toString`に指定したい基数を渡してやれば、その数値の2進数/8進数/16進数表現が得られる。

```javascript
console.log(Number(13).toString(2)); // 1101
console.log((13).toString(8)); // 15

const num = 27;
console.log(num.toString(16)); // 1b
console.log(27.toString(16)); // SyntaxError
```

なお[Number.toString](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)の仕様的には2進数や16進数に限らず2〜32までの任意の基数を指定できるようである。

ちなみに上記の最後の例のとおり数値リテラルに対してはもちろん実行できないので注意が必要である。ただ一旦変数に入れると数値リテラルのはずなのに実行できているのは、おそらく実行時に暗黙の型変換(Javaで言うオートボクシング[^1])的な処理が実行されてるんじゃないかと思われる。

## 負数の2進数変換

上記のコードは正の整数に対しては期待通りの動作をするが、負の整数で実行すると意図しない結果となる。

```javascript
console.log(Number(-1).toString(2)); // -1
```

負数の場合でも意図通りの変換を行うためには、以下のようにビット演算子による32ビット変換をかけた後に`toString()`する必要がある。

```javascript
console.log((-1 >>> 0).toString(2)); // 11111111111111111111111111111111
```

負数は2の補数で表現される。

### 参考

https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

[^1]: http://qiita.com/chihiro/items/870eca6e911fa5cd8e58
