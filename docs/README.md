# HonKit Sample

本ページのレンダリングには[HonKit](https://honkit.netlify.app)を利用しています。

## 手元でビルドして表示確認をする方法

HonKitを動作させるためにはnode.jsが必要となります。
また、PlantUML拡張を利用するために、JavaとGraphvizも必要となります。
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

### plantuml

`@startuml`と`@enduml`で囲むことで、PlantUMLをmarkdownに直接記述することができます。

```
start
if (condition A) then (yes)
  :Text 1;
elseif (condition B) then (yes)
  :Text 2;
  stop
elseif (condition C) then (yes)
  :Text 3;
elseif (condition D) then (yes)
  :Text 4;
else (nothing)
  :Text else;
endif
stop
```

```uml
@startuml
start
if (condition A) then (yes)
  :Text 1;
elseif (condition B) then (yes)
  :Text 2;
  stop
elseif (condition C) then (yes)
  :Text 3;
elseif (condition D) then (yes)
  :Text 4;
else (nothing)
  :Text else;
endif
stop
@enduml
```

```
actor actor
agent agent
artifact artifact
boundary boundary
card card
cloud cloud
component component
control control
database database
entity entity
file file
folder folder
frame frame
interface  interface
node node
package package
queue queue
stack stack
rectangle rectangle
storage storage
usecase usecase
```

```uml
@startuml
actor actor
agent agent
artifact artifact
boundary boundary
card card
cloud cloud
component component
control control
database database
entity entity
file file
folder folder
frame frame
interface  interface
node node
package package
queue queue
stack stack
rectangle rectangle
storage storage
usecase usecase
@enduml
```

```
package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}
 
node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
} 

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]
```

```uml
@startuml
package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}
 
node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
} 

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]
@enduml
```

```
[Prototype design] lasts 10 days
[Code prototype] lasts 10 days
[Write tests] lasts 5 days
[Code prototype] starts at [Prototype design]'s end
[Write tests] starts at [Code prototype]'s start
```

```uml
@startuml
[Prototype design] lasts 10 days
[Code prototype] lasts 10 days
[Write tests] lasts 5 days
[Code prototype] starts at [Prototype design]'s end
[Write tests] starts at [Code prototype]'s start
@enduml
```

他のサンプルは[仕様](http://plantuml.com/sitemap-language-specification)をみてください。

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
