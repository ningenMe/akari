import { useRouter } from 'next/router'
import { Container } from '@mui/material'
import { Title } from 'components/atoms/Title'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { SiteConst } from 'constants/Const'
import { CREATION_LIST } from 'constants/creationList'
import fontStyles from 'styles/Font.module.scss'
import styles from './Contact.module.scss'

// ?service=xxx で遷移元サービスが渡された場合、一覧に載っている表示名に正規化する。一覧に無い値はそのまま表示する
const resolveServiceName = (service: string): string =>
  CREATION_LIST.find((creation) => creation.title.toLowerCase() === service.toLowerCase())?.title ?? service

const buildMailtoHref = (serviceName?: string): string => {
  const subject = serviceName ? `【${serviceName}】お問い合わせ` : 'お問い合わせ'
  return `mailto:${SiteConst.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export const Contact = (): JSX.Element => {
  const router = useRouter()
  const { service } = router.query
  const serviceName = typeof service === 'string' && service.length > 0 ? resolveServiceName(service) : undefined

  return (
    <Container>
      <Title title='Contact' />
      <CustomNormalCard>
        <div className={`${styles.article} ${fontStyles.body}`}>
          <p>ningenMe が提供する Web サイトおよび Web サービス（geeq、last1tile、ROOM、melang 等を含みます）共通のお問い合わせ窓口です。ご意見・不具合報告・その他お問い合わせは、以下のメールアドレスまでご連絡ください。</p>
          {serviceName && (
            <p className={styles.service}>対象サービス: {serviceName}</p>
          )}
          <p><a href={buildMailtoHref(serviceName)}>{SiteConst.CONTACT_EMAIL}</a></p>
        </div>
      </CustomNormalCard>
    </Container>
  )
}
