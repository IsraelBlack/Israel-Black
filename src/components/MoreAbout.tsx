import { useState } from 'react';
import { TECollapse } from 'tw-elements-react';

export default function MoreAbout(): JSX.Element {
	const [activeElement, setActiveElement] = useState('');

	const handleClick = (value: string) => {
		if (value === activeElement) {
			setActiveElement('');
		} else {
			setActiveElement(value);
		}
	};
	return (
		<div className=" m-10 md:my-10 md:mx-40 rounded-lg shadow-cust md:border-none border-gray bg-white ">
			<h2 className="mb-0">
				<button
					className={`${
						activeElement === 'element1'
					} group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
					type="button"
					onClick={() => handleClick('element1')}
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					More About Me
					<span
						className={`${
							activeElement === 'element1'
								? `rotate-[-180deg] -mr-1`
								: `rotate-0 `
						} ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				</button>
			</h2>
			<TECollapse
				show={activeElement === 'element1'}
				className="!mt-0 !rounded-b-none !shadow-none"
			>
				<div className="px-5 py-4">
					<p>
						During my time as a Linguistics student, I made friends with tech
						people who introduced me to the world of programming in many forms.
						The more I learnt, the more deeply I fell for the tech field. Now, I
						can finally take this love and use it apply to my own projects and
						to a career in the engrossing industry of tech.
					</p>

					<br />

					<p>
						As a Dev academy grad, I have a skill set that makes me a valuable
						team member. Knowledge of different front-end and backend tech
						enforced by incredibly desirable people skills that makes me a
						valuable team member.
					</p>

					<br />

					<p>
						My people skills include my ability to breakdown concepts for people
						not familiar with them from my experience in Teaching English to
						Speakers of Other Languages (TESOL). Client side communication and
						problem solving from my time as a Desktop Platform intern. From Dev
						Academy, I learnt how to have confronting but important professional
						conversations, how to work in groups ranging from 2 to 5 members and
						how to contribute to project ideas, hold meetings, having
						conversations about individuals' well being and how to work with
						various abilities learning goals. Below are my top tech Skills:
					</p>
				</div>
			</TECollapse>
		</div>
	);
}
