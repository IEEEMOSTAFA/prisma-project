// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
//             <div className="navbar bg-base-100 shadow-sm">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             {/* <li><a>Item 1</a></li>
//                             <li>
//                                 <a>Parent</a>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Item 3</a></li> */}
//                             <Link href={"/jobs"}>Brows Jobs</Link>
//                             <Link href={"/jobs/post"}>Post a Jobs</Link>
//                             <Link href={"/dashboard"}>Dashboard</Link>
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">daisyUI</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><a>Item 1</a></li>
//                         <li>
//                             <details>
//                                 <summary>Parent</summary>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li><a>Item 3</a></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Button</a>
//                 </div>
//             </div>
//         </div>
//     )
// }



























import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><Link href="/jobs">Browse Jobs</Link></li>
                            <li><Link href="/jobs/post">Post a Job</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link href="/">
                        <img src="https://i.ibb.co/8g0Wx7Vj/docs-logo.png" alt="Logo" className="h-10 w-auto rounded-2xl bg-amber-200" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/jobs">Browse Jobs</Link></li>
                        <li><Link href="/jobs/post">Post a Job</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Link href="/signin" className="btn btn-primary">Sign In</Link>
                    <Link href="/signout" className="btn btn-outline">Sign Out</Link>
                </div>
            </div>
        </div>
    )
}