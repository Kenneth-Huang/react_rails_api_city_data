import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' }
    // this.setFormLocation = this.props
  }

  // googlePlaceRef = React.createRef()

  handleChange = (address) => {
    this.setState({ address })
  }

  // .then(results => getLatLng(results[0]))
  handleSelect = (address) => {
    const setFormLocation = this.props.setFormLocation

    geocodeByAddress(address)
      .then(function(results){
        setFormLocation(results[0].formatted_address)
        getLatLng(results[0])
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
      <div className="autocomplete-root">
        <input className="form-control" {...getInputProps()} />
        <div className="autocomplete-dropdown-container">
          {suggestions.map(suggestion => (
            <div {...getSuggestionItemProps(suggestion)} className="suggestion">
              <span>{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    );

    const searchOptions = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
     }

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      >
        {renderFunc}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput
