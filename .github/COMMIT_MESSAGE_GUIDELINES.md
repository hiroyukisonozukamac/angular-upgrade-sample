# コミットメッセージガイドライン（Angular Upgrade 用）

## フォーマット
<type>(<scope>): <概要（日本語）>

## type（種類）
- feat: 新機能追加
- fix: バグ修正
- docs: ドキュメント変更
- style: コードスタイル変更（意味を変えない修正）
- refactor: リファクタリング
- perf: パフォーマンス改善
- test: テスト追加／修正
- chore: 雑務（設定変更など）
- upgrade: Angular バージョンアップ作業

## scope（範囲）
- v9, v10, v12, v14, v18: 対象バージョン
- readme: README変更
- perf-test: パフォーマンス計測関連
- material, ngrx: ライブラリ関連

## 記載ルール
- **概要（subject）は日本語でOK**
- 必要に応じて本文（body）で詳細を補足（こちらも日本語OK）
- 英語併記は任意（例: Zenn記事とリンクさせる場合など）

## 例
- upgrade(v10): Angular v9→v10 へアップグレード
- perf(v10): ビルド時間とバンドルサイズの計測結果を追加
- docs(readme): v10 アップグレード手順を追記
- chore(v9): 初期Angular 9 プロジェクト作成
- fix(material): v10 アップグレード後のMaterialテーマ崩れを修正