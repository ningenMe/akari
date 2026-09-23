import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { SiteConst } from 'constants/Const'
import fontStyles from 'styles/Font.module.scss'
import styles from './Legal.module.scss'

export const Terms = (): JSX.Element => {
  return (
    <Container>
      <Title title='Terms' />
      <CustomNormalCard>
        <div className={`${styles.article} ${fontStyles.body}`}>
          <h2>適用</h2>
          <p>本規約は、ningenMe が提供する Web サイトおよび Web サービス（geeq、last1tile、ROOM、melang 等を含み、以下「本サービス」といいます）に共通して適用される利用規約です。本規約は、本サービスに個別の規約（以下「個別規約」）が定められる場合の親規約となるものであり、本規約と個別規約の内容が抵触する場合は、当該個別規約が優先して適用されます。ユーザーは本サービスを利用した時点で、本規約に同意したものとみなします。</p>

          <h2>サービス内容</h2>
          <p>運営者は、予告なく本サービスの内容の追加・変更・削除、その他本サービスの内容を変更することがあります。</p>

          <h2>アカウントについて</h2>
          <p>一部のサービスでは、Google 等が提供する OAuth 認証を用いてアカウントを提供します。ユーザーは、当該認証に用いるアカウントの情報を自己の責任において管理するものとし、当該アカウントを通じて行われた行為については、ユーザー自身が責任を負うものとします。</p>

          <h2>禁止事項</h2>
          <p>本サービスの利用にあたり、ユーザーは以下の行為をしてはなりません。</p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>リバースエンジニアリング、複製、改変等の不正利用</li>
            <li>他者に成りすます行為、または認証情報を不正に利用する行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ul>

          <h2>知的財産権</h2>
          <p>本サービスに関するコンテンツ（デザイン、ロゴ、実装等を含みます）の著作権その他の知的財産権は、運営者または正当な権利を有する第三者に帰属します。</p>

          <h2>免責事項</h2>
          <p>本サービスは現状有姿で提供され、完全性・正確性・有用性等について保証されません。運営者は、本サービスの利用により生じたいかなる損害についても、法令上認められる範囲で責任を負わないものとします。</p>

          <h2>サービス内容の変更・中断・終了</h2>
          <p>運営者は、ユーザーへの事前の通知なく、本サービスの内容を変更し、または本サービスの提供を中断・終了することができるものとします。</p>

          <h2>個別規約</h2>
          <p>課金、ユーザー投稿、永続的なユーザーデータの保存など、サービス固有の取り扱いが必要となる場合、運営者は本規約を親規約とする個別規約を別途定めることがあります。</p>

          <h2>本規約の変更</h2>
          <p>本規約は予告なく変更されることがあります。変更後の規約は、本ページに掲載した時点から効力を生じるものとします。</p>

          <h2>準拠法・裁判管轄</h2>
          <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。</p>

          <h2>お問い合わせ</h2>
          <p>本規約に関するお問い合わせは、<a href={`mailto:${SiteConst.CONTACT_EMAIL}`}>{SiteConst.CONTACT_EMAIL}</a> までご連絡ください。</p>
        </div>
      </CustomNormalCard>
      <Typography variant='body2' className={`${styles.date} ${fontStyles.body}`}>
        制定日: 2026年9月23日
      </Typography>
    </Container>
  )
}
