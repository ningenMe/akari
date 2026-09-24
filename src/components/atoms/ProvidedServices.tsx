import { PROVIDED_SERVICE_LIST } from 'constants/creationList'

interface ProvidedServicesProps {
  // trueの場合「以下「本サービス」といいます」という定義文言を括弧内に付け加える（Privacy/Termsでのみ使用）
  defineAsHonService?: boolean
}

export const ProvidedServices = ({ defineAsHonService = false }: ProvidedServicesProps = {}): JSX.Element => (
  <>
    ningenMe が提供する Web サイトおよび Web サービス（
    {PROVIDED_SERVICE_LIST.map((service, index) => (
      <span key={service.name}>
        {index > 0 && '、'}
        <a href={service.href} target='_blank' rel='noreferrer'>{service.name}</a>
      </span>
    ))}
    {defineAsHonService && '。以下「本サービス」といいます'}
    ）
  </>
)
