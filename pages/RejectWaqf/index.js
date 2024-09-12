import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";

const RejectWaqf = () => {
    const handleSpeak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    };
    const router = useRouter();
    return (
        <>
            <Navbar />


            {/* New section added here */}
            <div className="flex items-center justify-between p-4 bg-gray-100">
                {/* Image and Title */}
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png"
                        className="h-[60px] w-[60px] mr-3"
                        width={100}
                        height={100}
                        alt="img"
                    />
                    <h1 className="text-[12px] text-black font-serif">
                        Islamiya Kalvi Sangam
                    </h1>
                </div>

                {/* Home Button */}
                <button
                    className="bg-[#2dad5c] w-[155px] h-[55px] p-1 text-md text-white rounded-md"
                    onClick={() => router.push("/")}
                >
                    ← Go to Home
                </button>

                {/* Contact Information */}
                <div className="flex flex-col items-center font-bold text-xl ml-3">
                    <h1 className="text-[10px] text-black font-normal leading-snug">
                        For ads/sponsorship <br /> contact 9500489492
                    </h1>
                </div>
            </div>
            {/* End of the new section */}
            
            <main style={styles.main}>
                <header style={styles.header}>
                <h1 style={{ fontSize: "2em", fontWeight: "bold", display: "inline-block", marginRight: "10px" }}>
                Reject Waqf Amendment Bill 2024
            </h1>
            <button onClick={() => handleSpeak("Reject Waqf Amendment Bill 2024")} 
            style={{ cursor: "pointer",
                    cursor: "pointer",
                    fontSize: "1.5em", 
                    backgroundColor: "transparent",
                    border: "none"
             }}>
                🔊
            </button>

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
                        <span style={styles.date}>Due Date: 13th Sept 2024</span>
                        <br /><br />
                        <a href="https://waqfbill2024.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Courtesy: <br/> https://waqfbill2024.com
                        </a>
                        <button 
                    onClick={() => handleSpeak("Courtesy: waqfbill2024 dot com")} 
                    style={{
                        cursor: "pointer",
                        fontSize: "1.5em", 
                        backgroundColor: "transparent",
                        border: "none"
                    }}
                    aria-label="Listen to the URL"
                >
                    🔊
                </button>
                        
                      
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
