import Image from 'next/image'
import { CustomNormalCard } from '../CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './Profile.module.scss'

export const Profile = (): JSX.Element => {
  return (
    <div>
      <SubTitle title='Profile' />
      <div className={styles.row}>
        <Image
          src='/taishi.jpg'
          alt=''
          width={64}
          height={64}
          className={styles.avatar}
        />
        <div className={styles.cardSlot}>
          <CustomNormalCard>
            <h4>
              Furuta Taishi
            </h4>
            <p className={fontStyles.body}>
              ソフトウェア開発とコードレビューと静的型付け言語が好きです。ningenMeというハンドルネームで活動しています。
            </p>
          </CustomNormalCard>
        </div>
      </div>
    </div>
  )
}
