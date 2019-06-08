---
title: Javascriptで文字列中に出現する各文字を数える
date: "2019-06-08 15:41:22"
description: スプレッド演算子便利
tags: ["Javascript"]
---

プログラミング問題などでありがちな、ある文字列内の任意の文字の出現数をカウントするという課題。Javascriptだとこんな感じに書ける。

```javascript
function countCharInStr(str, chara) {
  const counts = {};
  for (let c of str) {
    counts[c] = c in counts ? counts[c] + 1 : 1;
  }
  return chara in counts ? counts[chara] : 0;
}

const str = 'aaaaaabbbcc';
const counts_a = countCharInStr(str, 'a');
console.log(counts_a); // 6
```


forループで文字列をループさせるC言語チックな書き方も出来るが`let a of b`構文を使うと簡潔に書ける。オブジェクトのキーチェックは`key in obj`構文で行っている。文字列のループ部分はES6環境ならspread演算子[^1]を使って以下のようにも書ける[^2]。

```javascript
function countCharInStr(str, chara) {
  const counts = {};
  [...str].map((c) => {
    counts[c] = c in counts ? counts[c] + 1 : 1;
  });
  return chara in counts ? counts[chara] : 0;
}
```

ちなみに各文字の全体の出現頻度(度数)が必要な場合は`counts`オブジェクトをそのままreturnしてよしなにすればよい。

[^1]: ...(ドット3つ)というやつ。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator

[^2]: こっちの方が簡潔かも。まぁ好みの問題ではある。