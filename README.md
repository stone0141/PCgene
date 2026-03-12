# PCgene

PC初心者向けのPC構成提案アプリです。

## 現在の状態
- 自分でパーツを選んで見積もれる静的ビルダー版
- CPU / GPU / メモリ / SSD / 電源 / ケースを選択可能
- Amazon / 楽天の商品検索リンクを各パーツに表示
- ケースを含む具体的な製品名を表示
- パーツごとの目安価格と構成合計目安を表示
- 用途別のたたき台プリセットあり
- GitHub Pages デプロイ用 workflow 追加済み
- Docker / Tailscale で公開しやすい形に調整済み

## ローカルで見る
```bash
python3 -m http.server 8000 --directory site
```

または

```bash
npm run dev
```

## Dockerで見る
```bash
docker compose up -d --build
```

## 公開URL候補
- <https://stone0141.github.io/PCgene/>

## 今後の予定
- 価格精度の改善
- マザーボード / CPUクーラー追加
- 互換性チェック
- 広告導線実装
