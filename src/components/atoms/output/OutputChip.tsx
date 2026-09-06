import fontStyles from 'styles/Font.module.scss'
import { ListItem } from "@mui/material";
import { Output } from 'interfaces/Output';
import styles from './OutputChip.module.scss'
import { OptionalHref } from '../OptionalHref';


export const OutputChip = ({output}: {output: Output}): JSX.Element => {
    return (<ListItem disablePadding className={`${styles.row} ${fontStyles.body}`}>
        <span className={styles.date}>{output.date}</span>
        <span className={styles.type}>{output.type}</span>
        <span className={styles.title}>
          <OptionalHref body={output.title} href={output.href} />
        </span>
    </ListItem>
    );
}
