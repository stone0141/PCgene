# PCgene

PC初心者向けのPC構成提案アプリです。

## 現在の状態
- 静的プレビュー版あり
- 予算 / 用途 / 重視ポイントでおすすめ構成を表示
- 初心者向けの説明つき

## 見る方法
### 1. すぐ見る
```bash
python3 -m http.server 8000 --directory site
```

### 2. npm script で見る
```bash
npm run dev
```

起動後に以下を開く:
- <http://localhost:8000>

## 今後の予定
- 構成ロジックの改善
- 購入リンク実装
- 広告導線実装
- デプロイ対応
