"use client";
import Tilt from "react-parallax-tilt";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
	const cardContainerRef = useRef(null);
	const touchStartRef = useRef(null);
	const [showScrollbar, setShowScrollbar] = useState(false);

	const handleScroll = (event) => {
		if (cardContainerRef.current) {
			cardContainerRef.current.scrollLeft += event.deltaY;
		}
	};

	const handleTouchStart = (event) => {
		touchStartRef.current = event.touches[0].clientX;
	};

	const handleTouchMove = (event) => {
		if (touchStartRef.current && cardContainerRef.current) {
			const touchEnd = event.touches[0].clientX;
			const touchDelta = touchEnd - touchStartRef.current;
			cardContainerRef.current.scrollLeft -= touchDelta;
			touchStartRef.current = touchEnd;
		}
	};

	const handleTouchEnd = () => {
		touchStartRef.current = null;
	};

	const handleMouseEnter = () => {
		setShowScrollbar(true);
	};

	const handleMouseLeave = () => {
		setShowScrollbar(false);
	};

	useEffect(() => {
		AOS.init();
		cardContainerRef.current.addEventListener("wheel", handleScroll, {
			passive: false,
		});

		return () => {
			cardContainerRef.current.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<>
			<style jsx global>{`
				body {
					overflow: hidden;
				}
				/* Hide scrollbar in Firefox */
				html {
					scrollbar-width: none;
				}
				/* Hide scrollbar in Webkit */
				body::-webkit-scrollbar {
					width: 0;
					height: 0;
				}
				.md\:pl-20 {
					/* Adjust as needed */
					padding-left: 5rem;
				}
				.md\:pr-20 {
					/* Adjust as needed */
					padding-right: 2rem;
				}
				.hide-scrollbar::-webkit-scrollbar {
					width: 0;
					height: 0;
				}
				.hide-scrollbar {
					scrollbar-width: none;
				}
			`}</style>

			<div className="md:pl-20 md:pr-20 sm:pl-10 sm:pr-10 min-h-screen">
				<div
					ref={cardContainerRef}
					className={`flex overflow-x-hidden overflow-y-auto space-x-4 scroll-smooth justify-items-center gap-20 ${
						showScrollbar ? "hide-scrollbar" : ""
					}`}
					style={{
						scrollBehavior: "smooth",
						scrollSnapType: "x mandatory",
						scrollbarWidth: "none", // Hide scrollbar in Firefox
						WebkitOverflowScrolling: "touch", // Enable momentum scrolling in Webkit
					}}
					onWheel={handleScroll}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<Tilt>
						<div
							data-aos="flip-left"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">Web Development</div>
								<p className="z-10 font-sans opacity-75">
									Develop Interactive and Functional Web Apps
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">
									Android Development
								</div>
								<p className="z-10 font-sans opacity-75">
									Create Fun Android Apps
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1620843002805-05a08cb72f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">
									Windows Development
								</div>
								<p className="z-10 font-sans opacity-75">
									Learn Native Windows Development
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://plus.unsplash.com/premium_photo-1682145723071-33e2207f4eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">Cloud Engineering</div>
								<p className="z-10 font-sans opacity-75">
									Learn and Handle Web Apps on Cloud
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-left"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">Web Development</div>
								<p className="z-10 font-sans opacity-75">
									Develop Interactive and Functional Web Apps
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">
									Android Development
								</div>
								<p className="z-10 font-sans opacity-75">
									Create Fun Android Apps
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1620843002805-05a08cb72f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">
									Windows Development
								</div>
								<p className="z-10 font-sans opacity-75">
									Learn Native Windows Development
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
					<Tilt>
						<div
							data-aos="flip-right"
							className="max-w-sm border font-sans overflow-hidden"
						>
							<img
								className="w-full"
								src="https://plus.unsplash.com/premium_photo-1682145723071-33e2207f4eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-2xl mb-2">Cloud Engineering</div>
								<p className="z-10 font-sans opacity-75">
									Learn and Handle Web Apps on Cloud
								</p>
								<p className="z-10 font-sans opacity-75">
									By - Some Instructor
								</p>
							</div>

							<div className="m-2 flex gap-2 items-center">
								<button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">
									30 Hours
								</button>
							</div>
						</div>
					</Tilt>
				</div>
			</div>
		</>
	);
};

export default Cards;
