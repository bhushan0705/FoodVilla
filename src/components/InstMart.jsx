import { useState } from "react";

// this is taking props from InstaMart as it is down in a same file....
const Section = ({title, description, isVisible, setIsVisible}) => {

  return (
    <div className="border-2 border-orange-500 p-3 m-3">
      <h2 className="text-3xl font-bold">{title}</h2>

      {/* buttons when they show and hide  */}
      {
        isVisible ? (
        <button className="cursor-pointer border-2 border-green-300 p-2" onClick={()=>setIsVisible(false)} >hide</button>

      ):(
        <button className="cursor-pointer border-2 border-green-300 p-2" onClick={()=>setIsVisible(true)} >Show</button>
        )
      }

      {
        isVisible && <p>{description}</p>  // && means only that becomes true
      }
    </div>
  )
};



const InstMart = () => {

  let [visibleSection, setVisibleSection] = useState(null);

  return (
    <div>
      
      <h1>InstaMart</h1>
      <Section title={"About InstaMart"}
        description={"This is section 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. This is section 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection(visibleSection ==="about" ? null : "about")}
        >
      </Section>

      <Section title={"Team InstaMart"}
        description={"This is section 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. This is section 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
        isVisible={visibleSection === "mart"}
        setIsVisible={() => setVisibleSection(visibleSection ==="mart" ? null : "mart")}
        >
      </Section>

      <Section title={"Careers"}
        description={"This is section 3 loremorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo This is section 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => setVisibleSection(visibleSection ==="careers" ? null :"careers")}
        >
      </Section>
    </div>
  )
}

export default InstMart