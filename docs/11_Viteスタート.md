# Vite スタート

作成日 2025/03/15、更新日 2025/03/16

## `22-bookworm` の開発コンテナを起動する

```bash
cat /etc/os-release
# PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

node --version
# v22.12.0

npm --version
# 10.9.0
```

## npmコマンドを叩いて、質問にいくつか答える

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

## アプリを起動する

```bash
cd app
npm install

tsc --version

npm run dev
```
