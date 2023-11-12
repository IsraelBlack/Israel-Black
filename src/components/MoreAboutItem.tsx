import React from 'react';

interface Props {
	section: string;
}

export const MoreAboutCont = ({ section, key }) => {
	return (
		<>
			<ExpandableColumn />
			<TextSection />
		</>
	);
};

export const ExpandableColumn = () => {
	return (
  <div> {/* col-cont */}
    <div> {/* text */}
      More About Me
    </div>
    <button></button>
  </div>
  )
};

export const TextSection = () => {
	return <div>Text stuff</div>;
};
