import styles from './HomepageLinks.module.css'
import Link from 'next/link'

export default function HomepageLinksComponent() {
    const links = [
        {
            title: 'Iterators',
            href: 'iterators',
        },
        {
            title: 'Stack & queue',
            href: 'stack-queue',
        },
        {
            title: 'Extracting & inserting',
            href: 'extract-insert',
        },
        {
            title: 'Searching & sorting',
            href: 'search-sort',
        },
    ]
    return (
        <ul className={styles.links}>
            {links.map((link, index) => (
                <li
                    key={index}
                    className="animate-stagger whitespace-nowrap opacity-0"
                    style={{ '--i': index } as any}
                >
                    <Link
                        href={{
                            pathname: '/methods',
                            query: { key: link.href },
                        }}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
