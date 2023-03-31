# Token Cookie

## set-cookie

Backend: FastAPI
Frontend: React

1. FAPI: cookie の生成
2. FAPI: `response.set_cookie` で Header に設定
3. FAPI:そのまま送信 -> React 側は Header を勝手に見て、自動的に設定する
4. React 側は `Axios.defaul.withCredential` とすれば勝手に Cookie を使ってくれる
5. つまり React 側で Cookie を弄る必要はない 勝手に送信するし中身(expired token)の検証はすべて FAPI 側が行うため

react-cookie はつまり使う必要がなかった
