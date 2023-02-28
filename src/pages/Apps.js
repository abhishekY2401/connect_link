import Catalog from "../assets/apps/catalog.svg";
import Circooles from "../assets/apps/circooles.svg"
import CommandR from "../assets/apps/commandR.svg"
import HourGlass from "../assets/apps/hourglass.svg"
import Layers from "../assets/apps/layers.svg"
import Quotient from "../assets/apps/quotient.svg"


import AppView from "../components/AppView";

const Apps = () => {
  return (
    <div className="p-5">
      <div>Popular apps</div>
      <div className="flex flex-col mt-8 gap-10">
        <div className="flex gap-4">
          <AppView
            image={Catalog}
            name="Catalog"
            desc="Brings all your news into one place"
          />
          <AppView
            image={Circooles}
            name="Circooles"
            desc="Super lightweight design app"
          />
          <AppView
            image={CommandR}
            name="CommandR"
            desc="AI and machine learning data"
          />
        </div>
        <div className="flex gap-4">
          <AppView
            image={HourGlass}
            name="HourGlass"
            desc="Time management and productivity"
          />
          <AppView
            image={Layers}
            name="Layers"
            desc="Connect web apps seamlessly"
          />
          <AppView
            image={Quotient}
            name="Quotient"
            desc="Web-based sales doc management"
          />
        </div>
      </div>
    </div>
  );
};

export default Apps;
