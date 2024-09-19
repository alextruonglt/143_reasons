import "./globals.css"

export const metadata = {
	title: "143 Reasons I Love You",
	description: "A personal and loving list of 143 reasons why I love you.",
	keywords:
		"love, relationship, reasons, Valentine’s Day, personal gift, 143 reasons",
	author: "Robert Indries",
	openGraph: {
		type: "website",
		url: "https://bettertopics.com",
		title: "143 Reasons I Love You",
		description: "A personal and loving list of 143 reasons why I love you.",
	},
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
