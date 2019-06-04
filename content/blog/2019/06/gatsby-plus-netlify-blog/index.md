---
title: Gatsby+Netlifyでブログ作った（n回目）
date: "2019-06-04"
description: ブログをやっていく
---

もはや何度目になるかわからないがまたブログを作った（2年ぶり、n回目）。今までFC2やらはてなブログやらWordpressやらいろいろ試してきたが、今回は最近盛り上がってきてるっぽい[GatsubyJS](https://www.gatsbyjs.org/)というやつを使ってみた。

これは静的サイトジェネレータと言われるもので、コマンド一発でReactベースの静的サイトが作れるというすごいやつだ。

## 導入手順

Gatsbyでブログを公開する方法はググればたくさん出てくるが、簡単に手順をまとめると以下のようになる。

1. Gatsby CLIをインストール
2. 任意の場所でGatsbyプロジェクトを作成する
     * GatsbyにはStarterというテンプレートが用意されているので好きなテンプレートを使う(https://www.gatsbyjs.org/starters/?v=2)
3. 作成したGatsbyプロジェクトに移動しローカルサーバを起動する
    * `localhost:8000`で起動するのでブラウザでアクセスする
4. GithubにGatsbyプロジェクト用リポジトリを作成してpushする
5. NetlifyとGithubを連携させ、作成したリポジトリと接続する

1〜3を以下のように実行する。

```bash
# Gatsby CLIをインストール
npm install -g gatsby-cli

# ブログ名とStarterを指定してサイトを生成する（Starterを指定しない場合はデフォルトのStarterが適用される
gatsby new <blog-name> <starter-url>

# 以下はブログ用Starterの例
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog

# ローカルサーバで動かす
cd my-blog
gatsby develop
```

今回は参考情報が多かったため[Netlify](https://www.netlify.com/)でホスティングすることにした。Netlifyはブログをホスティングするだけなら無料で使えてカスタムドメインも使えるしLet's Encryptでhttps対応までしてくれる。最高だ。ドメインはお名前.comより若干高かったがUIが分かりやすかったのとアカウント管理が楽なのでGoogle Domainsを使ってみた。

ちなみに[Netlifyのテンプレートページ](https://templates.netlify.com/)からテンプレートを選んで直接Githubにリポジトリを作ってデプロイすることもできる。この方法も手軽でいいが、そうする場合は上記のローカルでのGatsbyプロジェクト作成ではなく、Githubからcloneする必要があるので若干注意が必要。

## 所感

Gatsbyは速さを売りにしているが、デプロイされたブログを見てみるととにかく圧倒的に速くて驚いた。文字通り瞬間的に表示される。Wordpress?スローすぎてあくびが出るぜ。

無事に設定が完了するとGithubにpushするだけで自動的にビルド→デプロイまで行ってくれる爆速ブログが爆誕する。めでたしめでたし。
