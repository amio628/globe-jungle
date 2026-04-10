# GLOBE JUNGLE — Donation LP

認定NPO法人グローブジャングルの寄付ランディングページです。静的 HTML / CSS / JavaScript のみで構成されており、任意の静的ホスティング（GitHub Pages / Cloudflare Pages / Netlify / Vercel など）に載せられます。

## 構成

```
.
├── index.html          # LP 本体
├── donate.html         # 寄付ページ（フォーム → Stripe）
├── styles.css          # 全スタイル
├── js/
│   ├── i18n.js         # JP / EN 言語切り替え + 翻訳辞書
│   └── donate.js       # 寄付フォームのロジック + Stripe 連携
└── assets/images/      # 画像（差し替え用）
```

## ローカルで確認

```bash
# どれかでOK
python3 -m http.server 8000
npx serve .
```

`http://localhost:8000` をブラウザで開いてください。

## 言語切り替え（JP / EN）

- ヘッダー右上の `JP` / `EN` タブで切り替え
- 選択は `localStorage` に保存されるのでリロード後も維持
- 翻訳は `js/i18n.js` の `I18N` オブジェクトに定義。新しい文言を追加する場合は `data-i18n="key.name"` を要素に付けて、辞書に同じキーを追加してください。
- 改行を入れたい文言は `data-i18n-html` 属性を付けると `<br>` が解釈されます。

## 画像の差し替え

`assets/images/README.md` を参照してください。指定ファイル名で配置するだけで反映されます。配置前はプレースホルダー画像が表示されます。

## 寄付フロー

```
index.html(LP)
     │   「寄付する」ボタン
     ▼
donate.html(フォーム)
     │   頻度 / 金額 / プロジェクト / お名前 / メール を選択
     ▼
Stripe Checkout(決済)
```

### Stripe 連携の設定

`js/donate.js` の先頭にある `STRIPE_CONFIG` を編集します。2通りの方法があります。

#### A) Stripe Payment Links（バックエンド不要・おすすめスタート）

1. Stripe Dashboard → Payment Links でプリセット金額ごとに Payment Link を作成（¥1,000 / ¥3,000 / ¥5,000 / ¥10,000 / ¥30,000 / カスタム の各 one-time と monthly 合計12個）
2. `STRIPE_CONFIG.paymentLinks` の対応キーに URL を貼り付け
3. `STRIPE_CONFIG.mode = "paymentLinks"` のままでOK

メリット: バックエンド不要でそのまま動く。
デメリット: URL 数が増える。任意金額は「下限○円〜」の Payment Link を使うか、B に切り替え。

#### B) サーバーレス関数（動的金額 / 毎月寄付 / メタデータ対応）

1. Cloudflare Workers / Netlify Functions / Vercel Functions などで、POST を受け取って `stripe.checkout.sessions.create(...)` を呼び、`{ url }` を返すエンドポイントを用意（詳細サンプルは `js/donate.js` のコメント冒頭に記載）
2. `STRIPE_CONFIG.mode = "serverless"` に変更
3. `STRIPE_CONFIG.checkoutEndpoint` にエンドポイント URL を設定

必要な Stripe シークレットキーは絶対にフロントに置かず、サーバーレス側の環境変数に保存してください。

## レスポンシブ

- 1024px 未満: 寄付ページを1カラムに
- 900px 未満: LPが1カラム + ハンバーガーメニュー表示
- 560px 未満: 全グリッドを1カラム、ヘッダーの GLOBE JUNGLE テキストを非表示

## デプロイ

1. 本リポジトリを Cloudflare Pages / Netlify / Vercel などに接続
2. Build command は空、Output directory は `/`（ルート）
3. デプロイ完了後、URL にアクセスして確認

## ライセンス

このリポジトリのコードはプロジェクト用途で自由にご利用ください。
