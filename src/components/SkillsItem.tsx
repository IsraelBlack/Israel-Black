import React from "react";

function SkillsItem(title:string, imgurl:string, description:string, stack:Array<string>, link:string) {
  return(
    <div>
      <img 
      src={imgurl}
      alt="portfolio"
      className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {stack.map(item => (
            <span>{item}</span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default SkillsItem;