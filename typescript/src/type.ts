interface IAddress {
  kheyaban: string;
  koche: string;
  pelak?: number;
}

type SallamFN = (
  name: string,
  lastname: string,
  address: string | IAddress
) => void;

const sallam: SallamFN = (name, lastname, address) => {
  const parsePelak = (pelak: number | undefined) => {
    return pelak ? `dar pelak ${pelak}` : "";
  };

  const parseAddress = (address: IAddress) => {
    return `dar kheyaban ${address.kheyaban} va koche ${
      address.koche
    } ${parsePelak(address.pelak)}`;
  };
  console.log(
    `sallam be ${name} + ${lastname} dar typescript ${
      typeof address === "object" ? parseAddress(address as IAddress) : address
    }`
  );
};

sallam("saeid", "zohdi", { kheyaban: "honarestan", koche: "golha", pelak: 58 });
