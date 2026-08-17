/**
 * @deprecated この型定義は一時的な対応です。Next.js App Router + React Server Components移行時に削除予定。
 * 
 * 【背景】
 * - Next.js Pages RouterのgetServerSidePropsでは、propsにプレーンなJSONオブジェクトしか渡せない
 * - protoから生成されたBlog型はgetUrl()などのメソッドを持つクラスインスタンスのため、シリアライゼーションエラーが発生
 * - そのため、protoオブジェクトをプレーンオブジェクトに変換するためのインターフェースとして作成
 *
 * 【削除条件】
 * - Next.js App Router + React Server Componentsに移行した時点で削除
 * - RSCではシリアライゼーションが不要なため、protoオブジェクトを直接使用可能
 *
 * Plain object representation of blog data for Next.js serialization
 */
export interface BlogData {
  url: string
  date: string
  blogType: string
  blogTitle: string
}