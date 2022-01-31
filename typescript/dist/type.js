"use strict";
const sallam = (name, lastname, address) => {
    const parsePelak = (pelak) => {
        return pelak ? `dar pelak ${pelak}` : "";
    };
    const parseAddress = (address) => {
        return `dar kheyaban ${address.kheyaban} va koche ${address.koche} ${parsePelak(address.pelak)}`;
    };
    console.log(`sallam be ${name} + ${lastname} dar typescript ${typeof address === "object" ? parseAddress(address) : address}`);
};
sallam("saeid", "zohdi", { kheyaban: "honarestan", koche: "golha", pelak: 58 });
