import React from "react";
import BingMapsReact from "bingmaps-react";
import Pin from "../../models/Pin";

const pinNapoli = {
    center: {
      latitude: 40.8517746,
      longitude: 14.2681244,
    },
    options: {
      title: "Pizzaland",
    },
}

const pinFirenze = {
    center: {
      latitude: 43.7695604,
      longitude: 11.2558136,
    },
    options: {
      title: "Bisteccaland",
    },
}

const pinMilano = {
    center: {
      latitude: 45.464664,
      longitude: 9.188540,
    },
    options: {
      title: "CotolettaLand",
    },
}

const pushPins = [pinNapoli, pinFirenze, pinMilano];


export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushPin : []
        };

        this.center = {
            latitude: 0,
            longitude: 0
        }

        this.options = ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let array = [...this.state.pushPin];
        let pin = new Pin({...this.center}, {options:this.title})

        array.push(pin)
    };

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
                        center: { latitude: this.center.latitude, longitude: this.center.longitude},
                        zoom: 5,
                        mapTypeId: "grayscale",
                    }}
                    />
                </div>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="latitude" className="form-label">Latitude</label>
                            <input className="form-control" type="number" name="latitude" value={this.center.latitude} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="longitude" className="form-label">Longitude</label>
                            <input className="form-control" type="number" name="longitude" value={this.center.longitude} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="title" className="form-label">Title</label>
                            <input className="form-control" type="text" name="title" value={this.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <button className="btn btn-success">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
