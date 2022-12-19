# HonKit Sample

本ページのレンダリングには[HonKit](https://honkit.netlify.app)を利用しています。

## 手元でビルドして表示確認をする方法

HonKitを動作させるためにはnode.jsが必要となります。
事前にインストールしておいてください。

まず必要なパッケージをインストールします。

```bash
$ npm install
```

ビルドします。

```bash
$ npm run build
```

ローカルにサーバーを立てます。

```bash
$ npm run serve
```

ブラウザで http://localhost:4000/ にアクセスすると表示を確認することができます。
なおmarkdownを編集すると自動でリビルド＆リロードされるので立ち上げ直す必要はありません。

## 拡張

いくつかのHonKit Pluginを導入しています。

### Flexible Alerts

tipsなどを表記するための拡張です。  

```
> [!NOTE]
> これはノートです。

> [!NOTE]
> - 箇条書きもできます。
> - 箇条書きもできます。

> [!TIP]
> これはコツです。

> [!WARNING]
> これは警告です。

> [!DANGER]
> これは危険です。
```

* NOTE

> [!NOTE]
> これはノートです。

* 箇条書き

> [!NOTE]
> - 箇条書きもできます。
> - 箇条書きもできます。

* TIP

> [!TIP]
> これはコツです。

* WARNING

> [!WARNING]
> これは警告です。

* DANGER

> [!DANGER]
> これは危険です。

#### MagicLink

URLっぽい文字列を書いておくと自動的にリンクに置き換えてくれます。

https://google.com

明示的にURLであることを示したいのであれば`<>`で囲むことができます。

<https://google.com>


#### tilde

```
いわゆるひとつの ~~打ち消し線~~ というやつでしょうか。
```

いわゆるひとつの ~~打ち消し線~~ というやつでしょうか。


#### folding-content

内容を折りたたんで表示することができます。

```
{% fold summary="詳細はこちら" %}
詳細です
- 箇条書き
- 箇条書き
{% endfold%}

```

{% fold summary="詳細はこちら" %}
詳細です
- 箇条書き
- 箇条書き
{% endfold%}


また、最初から内容を開いた状態にもできます。

```
{% fold summary="詳細はこちら", open=true %}
    詳細です
{% endfold%}
```

{% fold summary="詳細はこちら", open=true %}
    詳細です
{% endfold%}
