import React from 'react';

function EmailMe() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center">
				<form
					action="#"
					method="Post"
					className="flex flex-col w-full md:w-7/12"
				>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
				</form>
			</div>
		</div>
	);
}

export default EmailMe;
