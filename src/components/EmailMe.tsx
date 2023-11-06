import React from 'react';

function EmailMe() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center">
				<form
					action="https://getform.io/f/b2eeafd7-7ebb-41bc-bc47-79b5be139d61"
					method="Post"
					className="flex flex-col w-full md:w-7/12"
				>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
					<input
						type="text"
						name="email"
						placeholder="Name"
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none "
					/>
					<button
						type="button"
						className="text-center inline-block px-8 py-3 w-max text-base font-medium 
            rounded-md text-white bg-gradient-to-r from-blue to-green 
            drop-shadow-md hover:stroke-white"
					>
						Contact Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default EmailMe;
