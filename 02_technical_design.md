# 技術設計

## 使用技術
- フロントエンド: Next.js (13.5以降, App Router)
- スタイリング: Tailwind CSS
- 言語: TypeScript
- 状態管理: React Hooks
- API通信: Next.js API Routes / fetch
- DB: 未定（必要ならSupabaseまたはFirebase）
- デプロイ: Vercel / GitHub Pages

## アーキテクチャ
- コンポーネントベース開発
- PWA対応 (manifest.json, service worker)
- CMS的な構造（管理ページを後から追加可能に）

## ディレクトリ構成（例）
```
root
├── app
│   ├── page.tsx          # トップページ
│   ├── about             # 園の概要
│   ├── news              # お知らせ
│   ├── contact           # お問い合わせ
│   └── layout.tsx        # 共通レイアウト
├── components
│   ├── ui                # 汎用UI
│   └── sections          # セクション単位のUI
├── hooks
├── lib
├── public                # 画像・アイコン
├── styles
├── package.json
└── tsconfig.json
```

## UI要件
- ヒーローセクション（キャッチコピー＋CTAボタン）
- サービス紹介カード
- お知らせセクション
- お問い合わせフォーム（メール送信 or DB保存）
- フッター（園情報＋SNSリンク）

## PWA要件
- manifest.json の設定
- service worker でキャッシュ戦略
- オフライン時のフォールバックページ
