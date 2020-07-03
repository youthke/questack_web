
# 起動方法

## 前提

先にquestack-apiを起動してください.
questack-apiの起動は[こちら](https://github.com/youthke/questack-api)

## questack起動

```cmd
yarn dev
```

すると[localhost:3000/questack/top](http://localhost:3000/questack/top)でページを確認できます.

# システム概要

サインインすることで, 質問を募集する箱(stack)を作成することができます.
stackが保持するURLにアクセスすることで質問をすることができます.
質問をするのにアカウントを登録する必要はありません.
ただ,URLを知っていれば質問できます.
