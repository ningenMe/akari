import React from 'react'
import { BlogData } from 'repository/BlogData'
import Image from 'next/image'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogChip.module.scss'
import { ListItem } from '@mui/material'
import { PathConst, UrlConst } from 'constants/Const'

export const getBlogIconPath = (blogType: string): string => {
    if (blogType === "HATENA") return 'hatena.svg'
    if (blogType === "QIITA") return 'qiita.png'
    if (blogType === "SIZU") return 'sizu.png'
    if (blogType === "ZENN") return 'zenn.svg'
    if (blogType === "AMEBA") return 'a.png'
    if (blogType === "OLD_DIARY") return 'dokata.png'
    return 'ningenme.png'
}

const getBlogNingenmeUrl = (blogType: string): string => {
    if (blogType === "HATENA") return UrlConst.HATENA;
    if (blogType === "QIITA") return UrlConst.QIITA;
    if (blogType === "SIZU") return UrlConst.SIZU;
    if (blogType === "ZENN") return UrlConst.ZENN;
    if (blogType === "AMEBA") return UrlConst.AMEBA;
    if (blogType === "OLD_DIARY") return PathConst.OLD_DIARY;
    return PathConst.BLOG;
}

export const BlogNingenmeUrlChip = ({blogType, clickable, label}: {blogType: string, clickable: boolean, label?: string}): JSX.Element => {
    const content = (
      <span className={styles.platform}>
        <Image src={"/" + getBlogIconPath(blogType)} alt="" width={16} height={16} />
        {label ?? blogType}
      </span>
    )
    if (!clickable) return content
    return (
      <a href={getBlogNingenmeUrl(blogType)} className={styles.platformLink}>
        {content}
      </a>
    )
}

export const BlogChip = ({blog}: {blog: BlogData}): JSX.Element => {
    return (<ListItem disablePadding className={`${styles.row} ${fontStyles.body}`}>
        <span className={styles.date}>{blog.date}</span>
        <BlogNingenmeUrlChip blogType={blog.blogType} clickable={true}/>
        <a href={blog.url} className={styles.title}>{blog.blogTitle}</a>
    </ListItem>
    );
}
