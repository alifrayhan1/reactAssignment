// import React from "react";

function Effort() {
  const effortData =[
    {
      per:"32%",
      text:"Improvement in Open Rates",
    },
    {
      per:"75%",
      text:"Improvement in Ramp Time",
    },
    {
      per:"35%",
      text:"Improvement in Meetings Booked",
    },
  ]
  return (
    <>
      <section className="bg-[url('BG3.png')] bg-cover bg-no-repeat bg-center p-10 sm:p-16">
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold sm:font-bold w-3/5">Allocate effort where your reps make an inpact.</h1>
            <h2 className="text-teal-400 text-xl sm:text-2xl font-semibold italic">Let us handle the rest.</h2>
            <p className="text-slate-400 text-sm sm:text-base w-3/5">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2">
              
                  {effortData.map((data,index)=>(
                    <div key={index}>
                      <h1 className="text-teal-400 font-bold text-xl sm:text-2xl">{data.per}</h1>
                      <p className="text-slate-400 text-xs sm:text-sm w-2/3">{data.text}</p>
                    </div>
                  ))}
          

            </div>
        </div>
      </section>
    </>
  );
}

export default Effort;
