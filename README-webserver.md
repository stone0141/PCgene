# Docker Web Server

このディレクトリには最小の Docker 化された Web サーバー構成があります。

## 構成
- `Dockerfile` - Nginx ベースのコンテナ
- `docker-compose.yml` - 8080番で公開
- `site/index.html` - 配信されるトップページ

## 起動
```bash
docker compose up -d --build
```

## 停止
```bash
docker compose down
```

## 確認
ブラウザで `http://localhost:8080` を開く
