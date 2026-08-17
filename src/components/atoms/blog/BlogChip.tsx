import React from 'react'
import { BlogData } from 'repository/BlogData'
import Image from 'next/image'
import Chip from '@mui/material/Chip/Chip'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogChip.module.scss'
import { ListItem, ListItemText } from '@mui/material'
import { PathConst, UrlConst } from 'constants/Const'

const getBlogIconPath = (blogType: string): string => {
    if (blogType === "HATENA") return 'hatena.svg'
    if (blogType === "QIITA") return 'qiita.png'
    if (blogType === "SIZU") return 'sizu.png'
    if (blogType === "ZENN") return 'zenn.svg'
    if (blogType === "AMEBA") return 'a.png'
    return 'ningenme.png'
}

const getBlogNingenmeUrl = (blogType: string): string => {
    if (blogType === "HATENA") return UrlConst.HATENA;
    if (blogType === "QIITA") return UrlConst.QIITA;
    if (blogType === "SIZU") return UrlConst.SIZU;
    if (blogType === "ZENN") return UrlConst.ZENN;
    if (blogType === "AMEBA") return UrlConst.AMEBA;
    return PathConst.BLOG;
}

export const BlogNingenmeUrlChip = ({blogType, clickable}: {blogType: string, clickable: boolean}): JSX.Element => {
    return (
        <Chip 
        icon={<Image src={"/" + getBlogIconPath(blogType)} alt="image" width="20" height="20" />}
        label={blogType} 
        variant="outlined" 
        size="small" 
        className={styles.type} 
        component={clickable? "a" : "span"}
        href={clickable ? getBlogNingenmeUrl(blogType): undefined}
        clickable={clickable}
      />       
    )   
}

export const BlogChip = ({blog}: {blog: BlogData}): JSX.Element => {
    const blogDate = new Date(blog.date); 
    return (<ListItem disablePadding className={fontStyles.body}>
        <Chip 
          label={blog.date} 
          variant="outlined" 
          size="small" 
          className={blogDate.getFullYear() % 2 === 0 ? styles.date0 : styles.date1}
        />
        <BlogNingenmeUrlChip blogType={blog.blogType} clickable={true}/>    
        <ListItemText>
          <a href={blog.url} className={styles.title}>{blog.blogTitle}</a>
        </ListItemText>
    </ListItem>
    );
}

