# [Udemy - Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/learn)

[資料](https://github.com/StephenGrider/typescriptcasts)

## TS -> JS 変換

[TS - Playground](https://www.typescriptlang.org/play)

## 準備

`npm i -g typescript ts-node`

`tsc --help`でヘルプが表示されることを確認。  
もし tsc コマンド実行できない場合は、`npm bin -g`で global のインストール先を確認して PATH を通す。

vscode で TabSize=2 を指定。

Prettier で singleQuote=true を設定。  
[Prettier - Configuration File](https://prettier.io/docs/en/configuration.html)

## TypeScript コマンド/スクリプト

- コンパイル: `tsc <.ts>`
- コンパイル -> JS 実行: `ts-node <.ts>`

## interface vs type

使い分けがよくわからん。

[typescript handbook - Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

> If you would like a heuristic, use interface until you need to use features from type.

interface のこれが許される挙動、Window には title と ts がある、が好きではない。別名つけるべきでしょって気持ちになる。

```ts
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
```

interface を extends で持つべき属性を継承する感じの書き方は好き。これをメソッド引数の interface として指定する使い方は好き。

```ts
interface Reportable {
  summary(): string;
}

interface Car extends Reportable {
  manufacture: string;
  broken: boolean;
  mileage: number;
}

const oldMyVi = {
  manufacture: 'perodua',
  broken: false,
  mileage: 4500,
  summary(): string {
    return `${this.manufacture}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldMyVi);
```
