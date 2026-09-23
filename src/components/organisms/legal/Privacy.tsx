import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { SiteConst } from 'constants/Const'
import fontStyles from 'styles/Font.module.scss'
import styles from './Legal.module.scss'

export const Privacy = (): JSX.Element => {
  return (
    <Container>
      <Title title='Privacy' />
      <CustomNormalCard>
        <div className={`${styles.article} ${fontStyles.body}`}>
          <h2>適用範囲</h2>
          <p>本ポリシーは、ningenMe が提供する Web サイトおよび Web サービス（geeq、last1tile、ROOM、melang 等を含み、以下「本サービス」といいます）に適用されます。本サービスに個別のプライバシーポリシーが定められている場合を除き、本ポリシーが優先して適用されます。</p>

          <h2>取得する情報</h2>
          <p>本サービスの多くはアカウント登録や入力フォームを持たず、氏名・メールアドレス等の個人情報を直接収集することはありません。ただし、以下の場合には情報を取得することがあります。</p>
          <ul>
            <li>Google アナリティクスや Google AdSense 等により、Cookie 等を通じて閲覧ページ・利用端末情報・おおよその地域といったアクセス情報が自動的に収集される場合があります。</li>
            <li>一部のサービスでは Google 等が提供する OAuth 認証によるログイン機能を提供しており、認証時に認証事業者からユーザー識別子・氏名・メールアドレス等の情報を取得する場合があります。</li>
          </ul>

          <h2>Google アナリティクスについて</h2>
          <p>本サービスはアクセス解析のため Google アナリティクス（GA4）を使用しています。Google アナリティクスはトラフィックデータの収集のために Cookie を使用します。このデータは匿名で収集されており、個人を特定するものではありません。この機能はブラウザの設定で Cookie を無効にすることで収集を拒否することができます。詳しくは Google アナリティクス利用規約や Google のポリシーと規約をご覧ください。</p>

          <h2>Google AdSense について</h2>
          <p>一部のサービスでは、広告配信のため Google AdSense を使用しています。Google および Google パートナーである第三者配信事業者は、Cookie を使用して、ユーザーが本サービスや他のサイトにアクセスした際の情報に基づいて広告を配信することがあります。</p>

          <h2>Cookie 等の利用について</h2>
          <p>上記のアクセス解析・広告配信のほか、ログイン状態の維持等の目的で Cookie 等が使用される場合があります。ブラウザの設定により Cookie を無効化することも可能ですが、その場合、本サービスの一部機能が正しく動作しない可能性があります。</p>

          <h2>OAuth 認証について</h2>
          <p>一部のサービス（例: geeq）では、Google 等が提供する OAuth によるログイン機能を提供しています。認証にあたり、認証事業者からユーザー識別子・氏名・メールアドレス等の情報の提供を受ける場合があります。取得した情報は、認証、アカウント管理、本サービスの提供およびこれらに付随する目的の範囲内でのみ利用します。</p>

          <h2>取得した情報の利用目的</h2>
          <ul>
            <li>本サービスの提供、維持および改善のため</li>
            <li>OAuth 認証を利用するサービスにおける、ユーザー認証およびアカウント管理のため</li>
            <li>アクセス解析および広告配信のため</li>
          </ul>

          <h2>第三者提供</h2>
          <p>法令に基づく場合を除き、取得した情報を本人の同意なく第三者に提供することはありません。ただし、上記のアクセス解析・広告配信・OAuth 認証等のために、各事業者へ Cookie 等を通じて情報が渡る場合があります。</p>

          <h2>外部サービス</h2>
          <p>本サービスでは、上記のほか運営上必要な範囲で外部サービスを利用することがあります。各外部サービスにおける情報の取り扱いについては、それぞれの外部サービスが定めるプライバシーポリシーをご確認ください。</p>

          <h2>免責事項</h2>
          <p>本サービスからリンクやバナー等で移動したサイトで提供される情報、サービス等について一切の責任を負いません。本サービスのコンテンツは、可能な限り正確な情報を掲載するよう努めていますが、その正確性や安全性を保証するものではありません。</p>

          <h2>お問い合わせ</h2>
          <p>本ポリシーに関するお問い合わせは、<a href={`mailto:${SiteConst.CONTACT_EMAIL}`}>{SiteConst.CONTACT_EMAIL}</a> までご連絡ください。</p>

          <h2>プライバシーポリシーの変更について</h2>
          <p>本ポリシーは、個人情報に関して適用される法令を遵守するとともに、その内容を適宜見直し改善に努めます。本ポリシーの内容は予告なく変更されることがあり、変更後のポリシーは本ページに掲載した時点から効力を生じるものとします。</p>
        </div>
      </CustomNormalCard>
      <Typography variant='body2' className={`${styles.date} ${fontStyles.body}`}>
        制定日: 2026年9月23日
      </Typography>
    </Container>
  )
}
