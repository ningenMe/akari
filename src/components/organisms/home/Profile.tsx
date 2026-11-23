import Image from 'next/image'
import NextLink from 'next/link'
import { CustomNormalCard } from '../CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './Profile.module.scss'
import { PathConst, SiteConst } from 'constants/Const'

// 自己紹介文の中の名前部分だけをリンクにするため、文章を名前の前後に分ける
const [textBeforeHandle, textAfterHandle = ''] = SiteConst.PROFILE_TEXT.split(SiteConst.PROFILE_HANDLE)

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
              <NextLink href={PathConst.LINK} className={styles.nameLink}>
                {SiteConst.PROFILE_HANDLE}
              </NextLink>
            </h1>
            <p className={fontStyles.body}>
              {textBeforeHandle}
              <NextLink href={PathConst.LINK} className={styles.bodyLink}>
                {SiteConst.PROFILE_HANDLE}
              </NextLink>
              {textAfterHandle}
            </p>
          </CustomNormalCard>
        </div>
      </div>
    </div>
  )
}
