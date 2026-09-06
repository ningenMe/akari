import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'
import React, { ReactNode, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import ArticleIcon from '@mui/icons-material/Article'
import ComputerIcon from '@mui/icons-material/Computer'
import AppsIcon from '@mui/icons-material/Apps'
import ListIcon from '@mui/icons-material/List'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import { LinkConst, PathConst } from '../../constants/Const'
import { BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'
import { LastUpdatedDesktop } from 'components/atoms/LastUpdatedDesktop'
import { LastUpdatedMobile } from 'components/atoms/LastUpdatedMobile'

const iconSx = { fontSize: 18 }
const caretSx = { fontSize: 16 }

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
                           links,
                           className,
                           icon,
                         }: { title: string, links: ReadonlyArray<Link>, className: string, icon: ReactNode }) => {
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
        {links.map((link) => (
          <MenuItem key={link.name} sx={{ padding: 0 }}>
            <a href={link.href} className={styles.dropdownLink}>
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
      <MenuItem sx={{ padding: 0 }}>
        <a href={PathConst.DIARIES} className={styles.dropdownLink}>
          <MenuBookIcon sx={caretSx} />
          diaries
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
      <NormalElement key={2} link={LinkConst.TWITTER} className={className} icon={<TwitterIcon sx={iconSx} />} />,
      <DropdownElement key={3} title={'compro'} links={LinkConst.COMPROS} className={className}
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

