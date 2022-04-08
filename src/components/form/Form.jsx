import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 45.464664,
            longitude: 9.188540,
            title: 'Milan',
            pushPin: []
        };

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="latitude" className="form-label">Latitude</label>
                    <input className="form-control" type="number" name="latitude" value={this.state.latitude} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="longitude" className="form-label">Longitude</label>
                    <input className="form-control" type="number" name="longitude" value={this.state.longitude} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <button className="btn btn-success">Search</button>
                </div>
            </form>
        );
    }

}