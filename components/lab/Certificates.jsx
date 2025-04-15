import Image from 'next/image';
import React from 'react'
import styles from '@/styles/lab/Certificates.module.scss'
import isi from '@/public/assets/lab/cert/isi.png'
import iso from '@/public/assets/lab/cert/iso.webp'
import bis from '@/public/assets/lab/cert/bis.webp'
import fssai from '@/public/assets/lab/cert/fassai.jpg'
import hexiqon from '@/public/assets/lab/cert/hexiqon.jpg'
import Link from 'next/link';

const Certificates = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div >
                    <h1>Certificates & Reports</h1>
                </div>
                <div >
                    <h2>NABL REPORTS</h2>
                    <div>
                        <p>Montly</p>
                        <p>Quarterly</p>
                        <p>Annually</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <div>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <Image src={isi} alt='img' />
                        </div>
                        <p>ISI Certificate</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/36420f29-0dde-4b88-8b48-63e42e0cc0d8/ISI%20CERT..pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                    <div className="card">
                        <div className={styles.imgContainer} style={{ paddingTop: '2rem' }}>
                            <Image src={iso} alt='img' />
                        </div>

                        <p>ISO Certificate</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/e73696fa-b526-4f9f-ba1b-b7c14ed571e8/ISO%20CERT.pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                    <div className="card">
                        <div className={styles.imgContainer}>
                            <Image src={bis} alt='img' />
                        </div>

                        <p>BIS lab report</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/f91b1bf8-f16d-4e0b-8798-0027377ad94e/BIS%20lab%20report%20factory%20samples.pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                    <div className="card">
                        <div className={styles.imgContainer}>
                            <Image src={fssai} alt='img' />
                        </div>

                        <p>FSSAI Certificate</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/491bd483-4e45-451a-83c0-41bfe1ab5aac/FSSAI.pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                    <div className="card">
                        <div className={styles.imgContainer}>
                            <Image src={hexiqon} alt='img' />
                        </div>
                        <p>FEB-25 Report</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/39653132-d62e-45be-a90f-a74a227c9911/FEB_25%20REPORT.pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                    <div className="card">
                        <div className={styles.imgContainer}>
                            <Image src={hexiqon} alt='img' />
                        </div>

                        <p>MAR-25 Report</p>
                        <Link href={'https://img1.wsimg.com/blobby/go/dc0227ad-6188-438d-a352-a6b9b710c014/downloads/c5b4a544-542e-4b8d-91fb-d28d327b963b/MAR%20_25%20REPORT.pdf?ver=1744112699126'} target='_blank'>Download</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates;