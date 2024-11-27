import React from "react";
import { CONTACT } from "../constants";

const Information = () => {
  return (
    <div>
      <div className="border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Contactez-nous</h2>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="400"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=RP2M+G5%20El%20Hadjar+(jabInfo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center lg:justify-start pt-10 lg:pt-20">
              <h6 className="mb-2 font-semibold">Adresse:</h6>
              <p className="mb-4 text-neutral-400">{CONTACT.address}</p>

              <h6 className="mb-2 font-semibold">Numéro de téléphone:</h6>
              <p className="mb-4 text-neutral-400">{CONTACT.phoneNo}</p>

              <h6 className="mb-2 font-semibold">Email:</h6>
              <p className="mb-4 text-neutral-400">{CONTACT.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;


