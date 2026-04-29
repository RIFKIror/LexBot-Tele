# 💬 Simple Base Telegram Bot (Button)

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-enabled-red?logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-yellow?logo=javascript&logoColor=yellow)
![Axios](https://img.shields.io/badge/Axios-HTTP-blue?logo=axios&logoColor=white)
![Telegram](https://img.shields.io/badge/Telegram-API-2CA5E0?logo=telegram&logoColor=white)
---
*Base bot Telegram modern dengan fitur button menu, command system modular, cocok untuk dipelajari ataupun dikembangkan*
- Dibuat oleh : `—kyynxz31`
- Base Telegram Support Button
- Mudah dikembangkan
- Cocok untuk dipelajari atau dikembangkan
- Menggunakan Package Telegram Bot API
---
## 👨‍💻 Developer Information

| Information | Details |
|---|---|
| **Developer** | KyynXz |
| **Email** | kyynch31@gmail.com |
| **WhatsApp** | [Open Chat](https://wa.me/6281239075413) |
| **Telegram** | [@kyynxz31](https://t.me/kyynxz31) |
| **Website** | [kyynns.vercel.app](https://kyynns.vercel.app) |
| **REST API** | [api.lexcode.biz.id](https://api.lexcode.biz.id) |
| **Channel** | [Join Channel](https://whatsapp.com/channel/0029VbC2uly2f3EEsyAGna1d) |
| **Link MediaFire | [Download Here](https://www.mediafire.com/file/0ztrumzx5ziwkts/Simple+Base+Telegram.zip/file) |
---
## 📁 Project Structure

| Path / File | Type | Function |
|---|---|---|
| `index.js` | Main File | Entry point utama untuk menjalankan bot dan menangani semua incoming update/message |
| `commands/` | Folder | Tempat semua fitur command bot disimpan secara modular |
| `commands/ai/` | Folder | Menyimpan fitur AI seperti Gemini, Claude, dan AI tools lainnya |
| `commands/stalker/` | Folder | Menyimpan fitur stalker seperti TikTok dan GitHub stalk |
| `commands/search/` | Folder | Menyimpan fitur pencarian seperti YouTube search, Play Store, Pinterest, dll |
| `commands/menu.js` | Command File | Menampilkan menu utama bot beserta button navigation |
| `handlers/` | Folder | Menangani callback query, button click, dan event lainnya |
| `handlers/callback.js` | Handler File | Logic untuk semua `callback_data` dari inline keyboard button |
| `config/` | Folder | Menyimpan konfigurasi bot |
| `config/settings.js` | Config File | nama developer, nama bot, dan pengaturan global lainnya |
| `package.json` | Package File | Dependency project, script npm, dan metadata project |
| `package-lock.json` | Lock File | Mengunci versi dependency agar konsisten |
| `.gitignore` | Config File | Mengecualikan file/folder tertentu seperti `node_modules` dari Git |
---
## 🌳 Folder Tree

```bash
LexBot-Tele/
├── commands/
│   ├── ai/
│   ├── stalker/
│   ├── search/
│   └── menu.js
├── config/
│   └── settings.js
├── handlers/
│   └── callback.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
---
## 🛠 Cara Menambahkan Fitur Bot

*Berikut adalah cara menambahkan fitur pada base telegram*.
---
### 1) Create Command File

Buat file baru di dalam folder `commands/`

Contoh:
```bash
commands/ping.js
```
---
### 2) Tambahkan script berikut (contoh)
```javascript
export async function pingCommand(bot, chatId) {
  await bot.sendMessage(chatId, "🏓 Pong!");
}
```
---
### 3) Import Commands
Import file `commands/ping.js` ke `index.js`

```javascript
import { pingCommand } from "./commands/ping.js";
```
---
### Register Commands
Tambahkan commands handler di `index.js`

Contoh :
```javascript
if (text === "/ping") {
  return await pingCommand(bot, chatId);
}
```
---
## ☁️ Cara Membuat Akun Telegram Bot
*Untuk menggunakan base ini, dibutuh kan token telegram, ini adalah cara untuk mendapatkan token telegram*
---
### 1) Buka BotFather (Telegram)
Masuk ke telegram, cari bot resmi telegram
*@BotFather (Harus centang biru)*
---
### 2) Buat Bot Baru
Ketik command berikut ke BotFather :
/newbot => nant akan diminta Bot name & username

*Contoh Bot name & username*
Bot Name : LexBot
Bot Username : lexbotsigma_bot

*Note*: username harus diakhiri `_bot`
---
### 3) Ambil Token Telegram
Setelah bot berhasil dibuat, BotFather akan memberikan token, Contohnya :

```bash
1234567890:ABCDEFG_TOKEN_HERE
```

Masukan token telegram kalian ke `index.js` dibagian `const token`
---
## ⚙️ Cara Menginstal Base (Termux)
*Berikut dibawah ini adalah cara menginstal untuk apk termux*
```bash
pkg install git
git clone https://github.com/RIFKIror/LexBot-Tele.git
cd LexBot-Tele
npm run dev
```
---
