import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Epimglist.module.css'

function EpNumList({ data, epdata, defaultProvider, subtype, epnum }) {
    return (
        <div className={styles.epnumlistcontainer}>
            {epdata
                .slice()
                .map((episode) => (
                    <Link
                        href={`/anime/watch/${data.id}/${defaultProvider}/${episode?.number}?epid=${encodeURIComponent(
                            episode?.id
                        )}&type=${subtype}`}
                        key={episode.id}
                    >
                        <div className={`${styles.epdiv} ${parseInt(epnum) === episode.number ? styles.selectedEpnum : ''}`}>
                            {episode.number}</div>
                    </Link>
                ))}
        </div>
    )
}

export default EpNumList
