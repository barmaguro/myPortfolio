# myPortfolio
ポートフォリオサイトのgithub

ファイル・ディレクトリの命名# 命名ガイドライン

プロジェクト内の命名ルールを統一すると、コードの可読性が向上し、メンテナンス性が高まります。以下は、フロントエンド開発における一般的な命名ガイドラインです。特にNext.js、TypeScript、Tailwind、WordPressを使ったヘッドレスCMSプロジェクトに適しています。

## 1. ファイル・ディレクトリの命名
- **コンポーネントファイル名**は、コンポーネント名と一致させる
  - 例: `Header.tsx`, `Footer.tsx`
- ディレクトリ名はコンポーネントと関連する場合は単数形で統一
  - 例: `component/`, `page/`

## 2. 変数名・関数名
- **キャメルケース**を使用（最初の単語は小文字、それ以降の単語の頭文字は大文字）
  - 例: `getUserData`, `fetchPosts`, `isLoggedIn`
- **Boolean変数**は `is`、`has`、`can` などのプレフィックスを使う
  - 例: `isLoading`, `hasPermission`, `canSubmit`
  - 下記を参照
  - https://sora.fukui.jp/programming_naming/

## 3. Reactコンポーネント名
- **パスカルケース**を使用（単語の頭文字をすべて大文字にする）
  - 例: `UserProfile`, `PostList`
- **コンポーネント名**はその役割を明確にする
  - 例: `UserCard`, `PostDetail`, `SidebarMenu`

## 4. CSSクラス名（Tailwind CSSのユーティリティクラス）
- **BEM（Block Element Modifier）**ルールに準拠するか、コンポーネントに応じてユーティリティクラスのみを使う
  - 例: `block__element--modifier`, ただし、Tailwindのユーティリティクラスを中心にするなら、カスタムクラスを減らす。

## 5. TypeScriptインターフェース・型名
- **パスカルケース**を使用し、`I`プレフィックスを避ける（業界標準）
  - 例: `User`, `PostData`, `UserProfileProps`

## 6. APIエンドポイント
- **ケバブケース**でリソース名を表現し、名詞は複数形
  - 例: `/api/posts/`, `/api/users/`

## 7. WordPressのフィールドやコンテンツ名
- できるだけ**シンプルで分かりやすい英単語**を使用
  - 例: `postTitle`, `authorName`, `featuredImage`

## 8. Gitブランチ名
- **フィーチャーブランチ**は、ケバブケースでわかりやすく
  - 例: `feature/add-user-auth`, `bugfix/fix-header-layout`

## 9. 環境変数名
- **大文字とアンダースコア**を使用
  - 例: `NEXT_PUBLIC_API_URL`, `NODE_ENV`, `DATABASE_URL`

## 10. データベースのフィールド名（WordPressのカスタムフィールド含む）
- **スネークケース**を使用
  - 例: `post_id`, `user_email`
