import Image from 'next/image'
import { CustomNormalCard } from '../CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './Profile.module.scss'
import { SiteConst } from 'constants/Const'

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
            <h1 className={styles.name}>
              Furuta Taishi
            </h1>
            <p className={fontStyles.body}>
              {SiteConst.PROFILE_TEXT}
            </p>
          </CustomNormalCard>
        </div>
      </div>
    </div>
  )
}
