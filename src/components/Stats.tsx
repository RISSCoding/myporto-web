"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience"
    },
    {
        num: 5,
        text: "Projects completed"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 45,
        text: "code commits"
    },
]

const Stats = () => {
  return <section>
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[800vw] max-auto xl:max-w-none">
            {stats.map((item, index)=> {
                return (
                    <div 
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                        key={index}>
                        <CountUp 
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${item.text.length < 15 ? "max-w-[150px]" : "max-w-[150px]"}`}>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  </section>
  
}

export default Stats