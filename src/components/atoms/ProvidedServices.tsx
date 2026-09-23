import { UrlConst } from 'constants/Const'

interface ServiceLink {
  readonly name: string
  readonly href: string
}

// Privacy/Terms/Contactで文言を統一するための「ningenMeが提供するWebサイト・Webサービス」一覧。網羅的に列挙し、各サービス名からリンクを辿れるようにする
const SERVICE_LINKS: ReadonlyArray<ServiceLink> = [
  { name: 'geeq', href: UrlConst.GEEQ },
  { name: 'last1tile', href: UrlConst.LAST1TILE },
  { name: 'ROOM', href: UrlConst.ROOM },
  { name: 'melang', href: UrlConst.MELANG }
]

interface ProvidedServicesProps {
  // trueの場合「以下「本サービス」といいます」という定義文言を括弧内に付け加える（Privacy/Termsでのみ使用）
  defineAsHonService?: boolean
}

export const ProvidedServices = ({ defineAsHonService = false }: ProvidedServicesProps = {}): JSX.Element => (
  <>
    ningenMe が提供する Web サイトおよび Web サービス（
    {SERVICE_LINKS.map((service, index) => (
      <span key={service.name}>
        {index > 0 && '、'}
        <a href={service.href} target='_blank' rel='noreferrer'>{service.name}</a>
      </span>
    ))}
    {defineAsHonService && '。以下「本サービス」といいます'}
    ）
  </>
)
