import Image from 'next/image'
import NextLink from 'next/link'
import { CustomNormalCard } from '../CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './Profile.module.scss'
import { PathConst, SiteConst } from 'constants/Const'

export const Profile = (): JSX.Element => {
  return (
    <div className={styles.root}>
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
              taishi / ningenMe
            </h1>
            <p className={fontStyles.body}>
              {SiteConst.PROFILE_TEXT}
            </p>
            <NextLink href={PathConst.LINK} className={styles.linkAnchor}>
              link
            </NextLink>
          </CustomNormalCard>
        </div>
      </div>
    </div>
  )
}
