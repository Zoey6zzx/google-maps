import React from "react";
import BingMapsReact from "bingmaps-react";
import Form from "../form/Form";

const pushPin = {
    center: {
      latitude: 45.464664,
      longitude: 9.188540,
    },
    options: {
      title: "Milan",
    },
}

const pushPins = [pushPin];
export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <BingMapsReact
                    pushPins={pushPins}
                    bingMapsKey="Ap_vTdhXWHvvjgcGOq-GCWjM7ehWFP9d-oBkUK8a1CKCekScEhES1KvP3YsmuMt8"
                    height="100vh"
                    mapOptions={{
                        navigationBarMode: "default",
                        showBreadcrumb: true,
                    }}
                    viewOptions={{
                        center: { latitude: 45.464664, longitude: 9.188540},
                        mapTypeId: "grayscale",
                    }}
                    />
                </div>
                <div className="col-6">
                    <Form />
                </div>
            </div>

        );
    }
}
