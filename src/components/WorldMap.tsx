import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "./countries";

function WorldMap() {
    return (
        <div style={{ margin: "auto", width: "calc(100% - 32px)", height: "calc(100% - 32px)" }}>
            <VectorMap
                map={worldMill}
                style={{
                    width: "calc(100% = 32px)",
                    height: "calc(100% = 32px)",
                }}
                backgroundColor="#292929"
                markers={missingCountries}
                markerStyle={{
                    initial: {
                        fill: "red",
                    },
                }}
                series={{
                    regions: [
                        {
                            scale: colorScale,
                            values: countries,
                            attribute: "",
                        },
                    ],
                }}
                onRegionTipShow={function reginalTip(event: any, label: any, code: any) {
                    event.stopPropagation()
                    return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
                }}
                onMarkerTipShow={function markerTip(event: any, label: any) {
                    event.stopPropagation()
                    return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
                }}
            />
        </div>
    );
}

export default WorldMap;