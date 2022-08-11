import React, { useEffect, useState } from "react"

function App() {
	const [image, setImage] = useState("")
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then(res => res.json())
			.then(dog => {
				setImage(dog.message)
				setIsLoaded(true);
			})
	}, [])

	return (
		<div>
			{isLoaded ? null : <p>Loading...</p>}
			<img src={image} alt="A Random Dog" />
		</div>
	)

}

export default App;