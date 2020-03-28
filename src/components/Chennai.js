import React, { Component } from "react";
import { Container, Form, FormGroup, Button, Row, Col } from "react-bootstrap";
import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";

const checkbox = [
  { name: "Yes ", value: true },
  { name: "No Needed ", value: false }
];

const API_KEY = "YOUR_API_KEY_HERE";

class Chennai extends Component {
  state = {
    location: "",
    draw: "false",
    zoom: 13,
    center: {
      lat: 13.075651,
      lng: 80.229691
    },
    coords: [
      { lat: 13.086478, lng: 80.211495 },
      { lat: 13.090742, lng: 80.253466 },
      { lat: 13.057634, lng: 80.240677 },
      { lat: 13.052993, lng: 80.224455 },
      { lat: 13.070536, lng: 80.195024 }
    ],
    options: {
      enableStreetView: true
    }
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Container className='py-4'>
        <Row>
          <Col md={8}>
            <h4 className='text-secondary'> Google Maps - Chennai </h4>
            <div id='google-map'>
              <LoadScript id='script-loader' googleMapsApiKey={API_KEY}>
                <GoogleMap
                  id='google-map'
                  center={this.state.center}
                  zoom={this.state.zoom}
                  options={this.state.options}
                >
                  {this.state.location === "anna_nagar" && (
                    <Marker
                      position={{ lat: 13.086478, lng: 80.211495 }}
                      onClick={() => console.log("ANNA NAGAR")}
                    ></Marker>
                  )}

                  {this.state.location === "purasaiwakkam" && (
                    <Marker
                      position={{ lat: 13.090742, lng: 80.253466 }}
                      onClick={() => console.log("PURASAIWAKKAM ")}
                    ></Marker>
                  )}
                  {this.state.location === "nungambakkam" && (
                    <Marker
                      position={{ lat: 13.057634, lng: 80.240677 }}
                      onClick={() => console.log("NUNGAMBAKKAM")}
                    ></Marker>
                  )}
                  {this.state.location === "kodambakkam" && (
                    <Marker
                      position={{ lat: 13.052993, lng: 80.224455 }}
                      onClick={() => console.log("KODAMBAKKAM")}
                    ></Marker>
                  )}
                  {this.state.location === "koyambedu" && (
                    <Marker
                      position={{ lat: 13.070536, lng: 80.195024 }}
                      onClick={() => console.log("KOYAMBEDU")}
                    ></Marker>
                  )}

                  {this.state.draw === "true" && (
                    <Polygon
                      path={this.state.coords}
                      options={{
                        fillColor: "#fff",
                        fillOpacity: 0.6,
                        strokeColor: "#000",
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        editable: true,
                        draggable: true
                      }}
                    ></Polygon>
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
          </Col>
          <Col md={4}>
            <span className='py-4'></span>
            <h5 className='text-secondary'>Options </h5>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Form.Label>Choose a Place </Form.Label>
                <select
                  onChange={this.change}
                  name='location'
                  className='form-control'
                >
                  <option value='anna_nagar'>Anna Nagar </option>
                  <option value='purasaiwakkam'>Purasaiwakkam </option>
                  <option value='nungambakkam'>Nungambakkam </option>
                  <option value='kodambakkam'>Kodambakkam </option>
                  <option value='koyambedu'>Koyambedu </option>
                </select>
              </FormGroup>

              <FormGroup>
                <Form.Label>
                  <b>Show Routes </b>
                </Form.Label>
                {checkbox.map(item => (
                  <span>
                    <input
                      type='radio'
                      className='ml-4'
                      name='draw'
                      onChange={this.change}
                      value={item.value}
                    ></input>
                    {item.name}
                  </span>
                ))}
              </FormGroup>

              <Button type='submit'> Make Changes </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*
 -- coordnitaes --  
ANNA NAGAR  { lat: 13.086478, lng: 80.211495}
PURASAIWAKKAM { lat: 13.090742, lng: 80.253466}
NUNGAMBAKKAM { lat:13.057634 , lng: 80.240677}
KODAMBAKKAM { lat:13.052993 , lng: 80.224455}
KOYAMBEDU { lat:13.070536 , lng: 80.195024}
*/
export default Chennai;
