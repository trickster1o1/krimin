export default function Header() {
    const handelScroll = (sTo) => {
        let m = document.getElementById(sTo);
        m.scrollIntoView({ behavior: "smooth" }, true);
    }
    return (
        <nav>
            <div>LOGO</div>
            <ul>
                <li onClick={()=>handelScroll('hero')}>home</li>
                <li onClick={()=>handelScroll('about')}>about</li>
                <li>package</li>
                <li onClick={()=>handelScroll('gallery')}>gallery</li>
                <li onClick={()=>handelScroll('contact')}>contact</li>
            </ul>
        </nav>
    );
}