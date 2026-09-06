import { CustomNormalCard } from '../CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'

export const Profile = (): JSX.Element => {
  return (
    <div>
      <SubTitle title='About' />
      <CustomNormalCard>
        <h4>
          Furuta Taishi
        </h4>
        <p className={fontStyles.body}>
          web開発をしています。
          競技プログラミングとコードレビューとRustが好きです。
        </p>
      </CustomNormalCard>
    </div>
  )
}
