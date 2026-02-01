import headshot from "../profile.jpg"

export default function About() {
    return (
        <header>
            <img className="profile-pic" src={headshot} alt="profile headshot" />
            <h1>Steven Ren</h1>
            <h2>Frontend Developer</h2>
            <a href="https://rensteven-portfolio.vercel.app/">Portfolio</a>
            <div className="button-container">
                <a href="index.html" target="blank">
                    <button><img className="email-pic" src="https://img.icons8.com/deco-glyph/48/new-post.png" alt="new-post"/>Email</button>
                </a>
                <a href="https://www.linkedin.com/in/stevenr395/">
                    <button><img className="linkedin-pic" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>LinkedIn</button>
                </a>
            </div>
        </header>
    )
}