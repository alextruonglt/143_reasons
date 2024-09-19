import Image from "next/image"
import {
	reasons,
	title,
	openingText,
	closingText,
	signatureText,
} from "./index"
import "./globals.css"

export default function Home() {
	const paragraphEl = openingText.map((line, idx) => {
		return (
			<p
				key={idx}
				className="py-2 sm:text-lg md:text-2xl lg:text-2xl leading-9"
			>
				{line}
			</p>
		)
	})
	const reasonsEl = reasons.map((reason, idx) => {
		return (
			<li key={idx} className="reasons_li">
				{reason}
			</li>
		)
	})
	const closingEl = closingText.map((line, idx) => {
		return (
			<p
				className="py-2 sm:text-lg md:text-2xl lg:text-2xl leading-9"
				key={idx}
			>
				{line}
			</p>
		)
	})

	const signatureEl = signatureText.map((line, idx) => {
		return (
			<p className="sm:text-lg md:text-2xl lg:text-2xl leading-9" key={idx}>
				{line}
			</p>
		)
	})

	const currentYear = new Date().getFullYear()
	return (
		<>
			<section className="my-14 home_section flex flex-col items-center justify-center n">
				<Image
					src="/hero.png"
					width={620}
					height={620}
					alt="Couple Embracing Eachother"
				/>
				<h1 className="head_text">{title}</h1>
				<section className="content_section px-24">
					{paragraphEl}
					<div id="reason_container" className="0 my-3">
						<ol className="list-decimal ">{reasonsEl}</ol>
					</div>
					{closingEl}
					<div id="signature_container" className="py-5 ">
						{signatureEl}
					</div>
					<div id="createdby_container" className="createdby_container mt-12 ">
						<p>
							If you want to create even more joy in your relationship, visit{" "}
							<a
								className="underline"
								target="_blank"
								href="https://BetterTopics.com"
							>
								BetterTopics.com
							</a>
						</p>
						<p>
							Designed & Developed by{" "}
							<a
								className="underline"
								target="_blank"
								href="https://wesrom.com/"
							>
								Wesrom Corporation
							</a>
							. {currentYear}.
						</p>
					</div>
				</section>
			</section>
		</>
	)
}
