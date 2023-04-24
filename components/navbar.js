import React, { useState } from "react";
//npm install @headlessui/react react-scroll
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import { CaretDownIcon } from '@radix-ui/react-icons';
import 'tailwindcss/tailwind.css'; 

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
    const [activeClass, setActiveClass] = useState("");
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState("");
    const disabledLink = "opacity-50 cursor-not-allowed";
	return (
		<div>
			<nav className=" shadow-sm fixed top-0 w-full z-10" role="navigation" aria-label="Main">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<Link href="/">MyWeb<span className="text-blue-500">Class</span></Link>
								</h1>
							</div>
                            
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
                                        href="/"
										activeClass="Home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        role="menuitem"
                                        tabIndex="0"
                                        aria-label="Home section"
                                        aria-current={activeClass === "Home" ? "page" : undefined}
                                        onSetActive={() => setActiveClass("Home")}
                                    >
										Home
									</Link>
									<div
                                        className="relative inline-block text-left"
                                        onMouseEnter={() => setActiveClass("About")}
                                        onMouseLeave={() => setActiveClass("")}
                                    >
                                        <button 
                                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            activeClass="About"
                                            role="menuitem"
                                            tabIndex="0"
                                            aria-label="About section"
                                            aria-current={activeClass === "About" ? "page" : undefined}
                                            onSetActive={() => setActiveClass("About")}
                                        >
                                        About
                                        </button>
                                        <Transition
                                        show={activeClass === "About"}
                                        enter="transition-opacity ease-out duration-100"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity ease-in duration-75"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                        <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                                            <div className="py-1">
                                            <Link
                                                href="/about/our-mission"
                                                className="block px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
                                            >
                                                Our Mission
                                            </Link>
                                            <Link
                                                href="/about/our-team"
                                                className="block px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
                                            >
                                                Our Team
                                            </Link>
                                            </div>
                                        </div>
                                        </Transition>
                                    </div>
									<Link
                                        href="/resources"
										activeClass="Resources"
										to="Resources"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        role="menuitem"
                                        tabIndex="0"
                                        aria-label="Resources section"
                                        aria-current={activeClass === "Resources" ? "page" : undefined}
                                        onSetActive={() => setActiveClass("Resources")}
                                    >
										Resources
									</Link>

									<Link
                                        href="/services"
										activeClass="Services"
										to="Services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        role="menuitem"
                                        tabIndex="0"
                                        aria-label="Services section"
                                        aria-current={activeClass === "Services" ? "page" : undefined}
                                        onSetActive={() => setActiveClass("Services")}
                                    >
										Services
									</Link>

									<div
                                        className="relative inline-block text-left"
                                        onMouseEnter={() => setActiveClass("Blog")}
                                        onMouseLeave={() => setActiveClass("")}
                                    >
                                        <button 
                                            activeClass="Blog"
                                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            role="menuitem"
                                            tabIndex="0"
                                            aria-label="Blog section"
                                            aria-current={activeClass === "Blog" ? "page" : undefined}
                                            onSetActive={() => setActiveClass("Blog")}
                                        >
                                        Blog
                                        </button>
                                        <Transition
                                        show={activeClass === "Blog"}
                                        enter="transition-opacity ease-out duration-100"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity ease-in duration-75"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                        <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                                            <div className="py-1">
                                            <Link
                                                href="/posts/pre-rendering"
                                                className="block px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
                                            >
                                                Pre-Rendering
                                            </Link>
                                            <Link
                                                href="/posts/ssg-ssr"
                                                className="block px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
                                            >
                                                SSG-SSR
                                            </Link>
                                            </div>
                                        </div>
                                        </Transition>
                                    </div>
                                    <Link
                                        href="/privacy-policy"
										activeClass="Privacy"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        role="menuitem"
                                        tabIndex="0"
                                        aria-label="Privacy Policy section"
                                        aria-current={activeClass === "Privacy" ? "page" : undefined}
                                        onSetActive={() => setActiveClass("Privacy")}
                                    >
										Privacy Policy
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded={isOpen}
                                aria-labelledby="menuButtonLabel"
							>
								<span id="menuButtonLabel" className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu" role="menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
                                    href="/"
									activeClass="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    role="menuitem"
                                    tabIndex="0"
                                    aria-label="Home section"
                                    aria-current={activeClass === "home" ? "page" : undefined}
                                    onSetActive={() => setActiveClass("home")}
								>
									Home
								</Link>
                                <div
                                        className="relative inline-block text-left"
                                        onClick={() => {
                                            if (activeClass === "about") {
                                            
                                            setActiveClass("");
                                            } else {
                                            setActiveClass("about");
                                            }
                                        }}
                                    >
                                        <button 
                                            activeClass="about"
                                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            role="menuitem"
                                            tabIndex="0"
                                            aria-label="About section"
                                            aria-current={activeClass === "about" ? "page" : undefined}
                                            onSetActive={() => setActiveClass("about")}
                                        >
                                        About
                                        </button>
                                        <Transition
                                            show={activeClass === "about"}
                                            enter="transition-opacity ease-out duration-100"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity ease-in duration-75"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            >
                                            
                                                <Link
                                                    href="/about/our-mission"
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}
                                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    role="menuitem"
                                                    tabIndex="0"
                                                    aria-label="About section"
                                                    aria-current={activeClass === "about" ? "page" : undefined}
                                                    onSetActive={() => setActiveClass("about")}
                                                >
                                                    Our Mission
                                                </Link>
                                                <Link
                                                    href="/about/our-team"
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}
                                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    role="menuitem"
                                                    tabIndex="0"
                                                    aria-label="About section"
                                                    aria-current={activeClass === "about" ? "page" : undefined}
                                                    onSetActive={() => setActiveClass("about")}
                                                >
                                                    Our Team
                                                </Link>
                                               
                                        </Transition>
                                    </div>
								

								<Link
									href="/resources"
									activeClass="resources"
									
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    role="menuitem"
                                    tabIndex="0"
                                    aria-label="Resources section"
                                    aria-current={activeClass === "resources" ? "page" : undefined}
                                    onSetActive={() => setActiveClass("resources")}
                                >
									Resources
								</Link>
								<Link
									href="/services"
									activeClass="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    role="menuitem"
                                    tabIndex="0"
                                    aria-label="Services section"
                                    aria-current={activeClass === "services" ? "page" : undefined}
                                    onSetActive={() => setActiveClass("services")}
                                >
									Services
								</Link>

								<div
                                        className="relative inline-block text-left"
                                        onClick={() => {
                                            if (activeClass === "blog") {
                                            
                                            setActiveClass("");
                                            } else {
                                            setActiveClass("blog");
                                            }
                                        }}
                                    >
                                        <button 
                                            activeClass="blog"
                                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            role="menuitem"
                                            tabIndex="0"
                                            aria-label="Blog section"
                                            aria-current={activeClass === "blog" ? "page" : undefined}
                                            onSetActive={() => setActiveClass("blog")}
                                        >
                                        Blog
                                        </button>
                                        <Transition
                                            show={activeClass === "blog"}
                                            enter="transition-opacity ease-out duration-100"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity ease-in duration-75"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            >
                                            
                                                <Link
                                                    href="/posts/pre-rendering"
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}
                                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    role="menuitem"
                                                    tabIndex="0"
                                                    aria-label="Blog section"
                                                    aria-current={activeClass === "blog" ? "page" : undefined}
                                                    onSetActive={() => setActiveClass("blog")}
                                                >
                                                    Pre-Rendering
                                                </Link>
                                                <Link
                                                    href="/posts/ssg-ssr"
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}
                                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    role="menuitem"
                                                    tabIndex="0"
                                                    aria-label="Blog section"
                                                    aria-current={activeClass === "blog" ? "page" : undefined}
                                                    onSetActive={() => setActiveClass("blog")}
                                                >
                                                    Static Site Generation
                                                </Link>
                                               
                                        </Transition>
                                    </div>
                                    <Link
                                        href="/privacy-policy"
										activeClass="Privacy"
										smooth={true}
										offset={50}
										duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        role="menuitem"
                                        tabIndex="0"
                                        aria-label="Privacy Policy section"
                                        aria-current={activeClass === "Privacy" ? "page" : undefined}
                                        onSetActive={() => setActiveClass("Privacy")}
                                    >
										Privacy Policy
									</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;