# PCgene deployment notes

## Dockerで起動
```bash
docker compose up -d --build
```

## 確認
```bash
curl http://127.0.0.1:8080
```

## Tailscale Serve（ホスト側）
```bash
sudo tailscale serve --bg 8080
```

## Tailscale Funnel（一般公開したい場合）
```bash
sudo tailscale funnel --bg 8080
```

## 停止
```bash
docker compose down
```
