# PCgene

PC初心者向けのPC構成提案アプリです。

## 現在の状態
- 静的プレビュー版あり
- 予算 / 用途 / 重視ポイントでおすすめ構成を表示
- 初心者向けの説明つき
- Amazon / 楽天の商品検索リンクを各パーツに表示
- GitHub Pages デプロイ用 workflow 追加済み
- Docker / Tailscale で公開しやすい形に調整済み

## ローカルで見る
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

## Dockerで見る
```bash
docker compose up -d --build
```

- <http://localhost:8080>

## 公開URL候補
GitHub Pages が有効なら以下で公開されます:
- <https://stone0141.github.io/PCgene/>

## 今後の予定
- 構成ロジックの改善
- 購入リンクの精度向上
- 広告導線実装
- デプロイ後の公開品質向上
