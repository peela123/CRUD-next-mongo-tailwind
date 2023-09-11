import Link from "next/link";

const Navbar = () =>{
    return(
        <nav className = "flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link href = "/" className = "text-white">GTCoding.</Link>
            <Link href = "/addTopic" className = "bg-white p-2">Add Topic</Link>

        </nav>
    )
}

export default Navbar;