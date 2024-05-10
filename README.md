# How to running project


## Login / Register Rapid API

Projek ini menggunakan API dari Tripadvisor dari RapidAPI pada link dibawah, Disarankan untuk login / register pada website RapidAPI.

Tripadvisor URL : [https://rapidapi.com/DataCrawler/api/tripadvisor16](https://rapidapi.com/DataCrawler/api/tripadvisor16)


## Get Rapid API key

Ikuti langkah berikut :
- Klik url Tripadvisor di atas
- Pada halaman Tripadvisor, klik Subsribe to test, dan diarahkan ke halaman pricing, pilih yang Basic. JIka sudah, akan diarahkan kembali ke halaman sebelumnya
- Pada sidebar di tab Endpoint, expand menu dan pilih Search Restaurant
- Jika anda sudah Subscibe, akan ada informasi X-RapidAPI-Key pada Header Parameter, copy key tersebut dan simpan sementara


## Paste key to axios instance in src/config/axios.js

- Buka file axios.js di src/config, kemudian ganti "X-RapidAPI-Key Anda" pada headers dengan X-RapidAPI-Key milik anda sendiri.

## Running project
- Masuk ke folder project, jalankan `yarn install` atau `npm install`
- Jalankan project dengan perintah `yarn run dev`