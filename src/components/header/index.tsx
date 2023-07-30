import Link from "next/link"

export const Header = () => {
    return(
        <>
            <h1>Movies</h1>

            <nav>
                <ul>
                    <li>About us</li>
                    <li>
                        <Link href="/series">Series</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}