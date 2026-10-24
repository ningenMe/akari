import { Link } from '../../interfaces/Link'
import Image from 'next/image'
import styles from './Header.module.scss'
import React, { ReactNode, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import ShareIcon from '@mui/icons-material/Share'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TerminalIcon from '@mui/icons-material/Terminal'
import WorkIcon from '@mui/icons-material/Work'
import ArticleIcon from '@mui/icons-material/Article'
import ComputerIcon from '@mui/icons-material/Computer'
import AppsIcon from '@mui/icons-material/Apps'
import ListIcon from '@mui/icons-material/List'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { AppBar, Button, IconButton, Menu, MenuItem, SvgIcon, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import { LinkConst, PathConst } from '../../constants/Const'
import { BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'
import { LastUpdatedDesktop } from 'components/atoms/LastUpdatedDesktop'
import { LastUpdatedMobile } from 'components/atoms/LastUpdatedMobile'

const iconSx = { fontSize: 18 }
const caretSx = { fontSize: 16 }

type DropdownItem = { link: Link, icon?: ReactNode }

// MUIにBluesky・dev-null.sh・YOUTRUSTのブランドアイコンが無いため、Blueskyはsimple-icons(CC0)のパスをSvgIconで描画し、他は近い意味の汎用アイコンで代用する
const BlueskyIcon = () => (
  <SvgIcon sx={caretSx}>
    <path d='M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026' />
  </SvgIcon>
)

const SNS_ITEMS: ReadonlyArray<DropdownItem> = [
  { link: LinkConst.TWITTER, icon: <TwitterIcon sx={caretSx} /> },
  { link: LinkConst.BLUESKY, icon: <BlueskyIcon /> },
  { link: LinkConst.DEV_NULL, icon: <TerminalIcon sx={caretSx} /> },
  { link: LinkConst.FACEBOOK, icon: <FacebookIcon sx={caretSx} /> },
  { link: LinkConst.INSTAGRAM, icon: <InstagramIcon sx={caretSx} /> },
  { link: LinkConst.YOUTRUST, icon: <WorkIcon sx={caretSx} /> },
]

// 各サービスのfaviconを public に置いて表示する(BlogChipと同じ方式)。yukicoderは既存の画像を流用
const ImageIcon = ({ src }: { src: string }) => <Image src={src} alt='' width={16} height={16} />
const COMPRO_ITEMS: ReadonlyArray<DropdownItem> = [
  { link: LinkConst.ATCODER, icon: <ImageIcon src='/atcoder.png' /> },
  { link: LinkConst.CODEFORCES, icon: <ImageIcon src='/codeforces.png' /> },
  { link: LinkConst.YUKICODER, icon: <ImageIcon src='/yukicoder.jpg' /> },
  { link: LinkConst.TOKI, icon: <ImageIcon src='/toki.png' /> },
  { link: LinkConst.CSACADEMY, icon: <ImageIcon src='/csacademy.png' /> },
]

const NormalElement = (
  { link, className, icon }: { link: Link, className: string, icon: ReactNode },
) => {
  return (
    <div>
      <Button className={className} href={link.href} rel='noreferrer noopener' target='_blank' startIcon={icon}>
        {link.name}
      </Button>
    </div>
  )
}

const InternalLinkElement = (
  { link, className, icon }: { link: Link, className: string, icon: ReactNode },
) => {
  return (
    <div>
      <Button className={className} href={link.href} startIcon={icon}>
        {link.name}
      </Button>
    </div>
  )
}

const DropdownElement = ({
                           title,
                           items,
                           className,
                           icon,
                         }: { title: string, items: ReadonlyArray<DropdownItem>, className: string, icon: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Button onClick={onOpen} className={className} startIcon={icon} endIcon={<KeyboardArrowDownIcon sx={caretSx} />}>
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {items.map(({ link, icon }) => (
          <MenuItem key={link.name} sx={{ padding: 0 }}>
            <a href={link.href} rel='noreferrer noopener' target='_blank' className={styles.dropdownLink}>
              {icon}
              {link.name}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const BlogDropdownElement = ({
  className,
}: { className: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }
  return (
  <div>
    <Button onClick={onOpen} className={className} startIcon={<ArticleIcon sx={iconSx} />} endIcon={<KeyboardArrowDownIcon sx={caretSx} />}>
      {'blog'}
    </Button>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem sx={{ padding: 0 }}>
        <a href={PathConst.BLOG} className={styles.dropdownLink}>
          <ListIcon sx={caretSx} />
          All
        </a>
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='HATENA' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='QIITA' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='ZENN' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='SIZU' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='AMEBA' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='OLD_DIARY' clickable={true} label='OLD DIARY' />
      </MenuItem>
    </Menu>
  </div>
)
}

export const NingenmeNetHeader = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }

  const getElementList = ({ className }: { className: string }) => {
    return [
      <NormalElement key={1} link={LinkConst.GITHUB} className={className} icon={<GitHubIcon sx={iconSx} />} />,
      <DropdownElement key={2} title={'sns'} items={SNS_ITEMS} className={className}
                       icon={<ShareIcon sx={iconSx} />} />,
      <DropdownElement key={3} title={'compro'} items={COMPRO_ITEMS} className={className}
                       icon={<ComputerIcon sx={iconSx} />} />,
      <BlogDropdownElement key={4} className={className} />,
      <InternalLinkElement key={5} link={LinkConst.SERVICE} className={className} icon={<AppsIcon sx={iconSx} />} />,
    ]
  }

  return (
    <AppBar position='static' className={styles.ningenmeNetAppbar}>
      <Toolbar disableGutters>
        <a href={LinkConst.NINGENME_NET.href} className={styles.brand}>
          {LinkConst.NINGENME_NET.name}
        </a>

        {/*pc*/}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {getElementList({ className: styles.buttonPc })}
        </Box>

        {/*sp*/}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-haspopup='true'
            onClick={onOpen}
            color='inherit'
            className={styles.hamburger}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <LastUpdatedMobile />
            {getElementList({ className: styles.buttonSp })}
          </Menu>
        </Box>

        <LastUpdatedDesktop />

      </Toolbar>
    </AppBar>
  )
}

