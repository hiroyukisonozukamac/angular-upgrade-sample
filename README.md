# Angular アップグレード サンプル（v9→v18）

Angular v9からv18までのバージョンアップ手順とパフォーマンス比較を行うサンプルリポジトリです。  
Zenn記事の参考用、実務でのアップグレード検証用として公開しています。

## English
This repository demonstrates step-by-step Angular upgrades from v9 to v18,  
including build/runtime performance benchmarks for each major version.

## ディレクトリ構成
```
angular-upgrade-sample/
 ├─ v9/                     # Angular 9 プロジェクト
 ├─ v10/                    # Angular 10 アップグレード版
 ├─ v12/                    # Angular 12 アップグレード版（予定）
 ├─ v14/                    # Angular 14 アップグレード版（予定）
 ├─ v18/                    # Angular 18 アップグレード版（予定）
 ├─ performance-results.md  # バージョン別ビルド/実行性能比較
 └─ README.md
```

## 各バージョンのソース
- [v9 ソースコード](./v9)
- [v10 ソースコード](./v10)
- [v12 ソースコード（予定）](./v12)
- [v14 ソースコード（予定）](./v14)
- [v18 ソースコード（予定）](./v18)

## アップグレード記事（Zenn予定）
- [Angular v9→v10 アップグレード手順と注意点](https://zenn.dev/xxx/articles/angular-v9-v10-upgrade)（準備中）
- [Angular v10→v12 アップグレード手順と注意点](https://zenn.dev/xxx/articles/angular-v10-v12-upgrade)（準備中）
- [Angular v12→v14 アップグレード手順と注意点](https://zenn.dev/xxx/articles/angular-v12-v14-upgrade)（準備中）
- [Angular v14→v18 アップグレード手順と注意点](https://zenn.dev/xxx/articles/angular-v14-v18-upgrade)（準備中）

## パフォーマンス比較
各バージョンのビルド速度・実行速度の測定結果を `performance-results.md` に記載します。

## 動作環境
- Node.js v18+
- Angular CLI v18+
- npm v9+

## 実行方法
cd v9   # バージョンごとのディレクトリへ移動
npm install
ng serve
