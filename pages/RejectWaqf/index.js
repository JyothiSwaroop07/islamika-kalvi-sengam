import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const RejectWaqf = () => {
    return (
        <>
            <Navbar />
            <main style={styles.main}>
                <header style={styles.header}>
                    <h1 style={styles.title}>
                        Reject Waqf Amendment Bill 2024
                    </h1>
                </header>
                <section style={styles.description}>
                    <p style={styles.paragraph}>
                        <span style={styles.highlight}>
                            Save Indian Waqf Properties, Reject The Waqf Amendment Bill!
                        </span>
                        <br /><br />
                        Let’s stand together to defend the sanctity of Waqf and ensure its preservation for future generations.
                        <br /><br />
                        Abu Bakr narrated that he heard the messenger of Allah (pbuh) say, 
                        <span style={styles.italic}>
                            &quot;If people see some evil but do not change it, soon Allah will send His punishment upon them all&quot;
                        </span> 
                        – Sunan Ibn Maajah Vol 5, Hadeeth No. 4005
                        <br /><br />
                        This is an urgent call to the Muslims in India to stop this evil which breaches the sacred status of waqf, 
                        and has evil repercussions on the future of Islaamic institutions. 
                        We will bear Allah’s wrath and the curse of subsequent generations if we allow this bill to pass.
                        <br /><br />
                        <span style={styles.bold}>
                            Stop the evil or bear its liabilities in this life and in the Hereafter!
                        </span> 
                        Say no to the Waqf Amendment Bill!
                        <br /><br />
                        At least 5 million Muslims of India should send their rejection of the Waqf Amendment Bill. 
                        As Muslims of India, we will be held accountable if we do not prevent the Muslim Waqf properties from being taken away from the Ummah.
                        <br /><br />
                        Send your Rejection by scanning this QR Code. You can send your rejection to Waqf Bill to Joint Parliamentary Committee.
                        <br /><br />
                        <a href="https://waqfbill2024.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Visit https://waqfbill2024.com
                        </a>
                        <br /><br />
                        <span style={styles.date}>Due Date: 13th Sept 2024</span>
                    </p>
                </section>
                <section style={styles.iframeContainer}>
                    <iframe
                        src="https://waqfbill2024.com"
                        style={styles.iframe}
                        title="Waqf Bill 2024"
                    />
                </section>
            </main>
        </>
    );
};

// Define the styles
const styles = {
    main: {
        padding: '20px',
        fontFamily: `'Arial', sans-serif`,
        backgroundColor: '#f4f4f4',
        color: '#333',
        textAlign: 'center'
    },
    header: {
        marginBottom: '30px'
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#004d40',
        margin: '0'
    },
    description: {
        marginBottom: '30px',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#555'
    },
    paragraph: {
        margin: '0 auto',
        maxWidth: '800px',
        textAlign: 'left'
    },
    highlight: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#d32f2f'
    },
    italic: {
        fontStyle: 'italic'
    },
    bold: {
        fontWeight: 'bold'
    },
    link: {
        color: '#1976d2',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    date: {
        fontWeight: 'bold',
        color: '#d32f2f'
    },
    iframeContainer: {
        height: '600px',
        width: '100%',
        overflow: 'hidden',
        border: 'none',
        borderRadius: '8px'
    },
    iframe: {
        border: 'none',
        height: '100%',
        width: '100%',
        borderRadius: '8px'
    }
};

export default RejectWaqf;
