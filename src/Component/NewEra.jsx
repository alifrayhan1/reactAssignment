// import React from "react";
import { Button } from "@heroui/react";

function NewEra() {
  return (
    <>
      <section className="p-10 sm:p-16">
        <div className="text-center space-y-3">
          <h2 className="text-teal-500 text-xl sm:text-2xl font-semibold">
            GET STARTED
          </h2>
          <h1 className="text-2xl sm:text-3xl text-white font-bold">
          <span className="italic">Embrace</span> the new era of <span className="italic">outbound.</span>
          </h1>
          <div>
          <p className="text-base sm:text-lg text-slate-400">Wizia lets you train, activate, and optimize aiDRs. 
          </p>
          <p className="text-base sm:text-lg text-slate-400"> 
          Take your outbound to new levels of performance and efficiency.</p>
          </div>
          <div className="flex justify-center items-center">
          <Button
            color="primary"
            className="bg-teal-400 rounded-full"
            endContent={<img src="ButtonIcon.png" />}
          >
            Sign Up for the Beta
          </Button></div>
        </div>
      </section>
    </>
  );
}

export default NewEra;
