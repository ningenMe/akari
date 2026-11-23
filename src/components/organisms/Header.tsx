import { Link } from '../../interfaces/Link'
import Image from 'next/image'
import styles from './Header.module.scss'
import React, { ReactNode, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
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
import { BLOG_TYPE_DISPLAY_ORDER } from 'constants/BlogTheme'
import { LastUpdatedDesktop } from 'components/atoms/LastUpdatedDesktop'
import { LastUpdatedMobile } from 'components/atoms/LastUpdatedMobile'

const iconSx = { fontSize: 18 }
const caretSx = { fontSize: 16 }

type DropdownItem = { link: Link, icon?: ReactNode }

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
      {BLOG_TYPE_DISPLAY_ORDER.map((blogType) => (
        <MenuItem key={blogType}>
          <BlogNingenmeUrlChip blogType={blogType} clickable={true} label={blogType === 'OLD_DIARY' ? 'OLD DIARY' : undefined} />
        </MenuItem>
      ))}
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
      <InternalLinkElement key={2} link={LinkConst.LINK} className={className} icon={<LinkIcon sx={iconSx} />} />,
      <BlogDropdownElement key={3} className={className} />,
      <DropdownElement key={4} title={'compro'} items={COMPRO_ITEMS} className={className}
                       icon={<ComputerIcon sx={iconSx} />} />,
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

