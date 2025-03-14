# Vite スタート

作成日 2025/03/15

Node.js v22 の開発環境をDevContainerで起動する

```bash
cat /etc/os-release
# PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

node --version
# v22.12.0

npm --version
# 10.9.0
```

npmコマンドを叩いて、質問にいくつか答える

```bash
npm create vite@latest

# Project name:
# app

# Select a framework:
# Vue

# Select a variant:
# TypeScript

# Scafolding project in /workspaces/vuejs-vite-dojo/app...
# Done. Now run:
```

起動する

```bash
cd app
npm install
npm run dev
```
