import Link from 'next/link'
import styles from 'styles/logo.module.css'
export default function Logo({ box0n = false}) {
    return (
        <Link className={box0n ? styles.box : styles.basic}   href="/">
            CUBE
        </Link>
    )
}