import styles from 'styles/post-body.module.css'

export default function PostsBody({children}){
    return(
        <div className={styles.stack}>
            {children}
        </div>
    )
}