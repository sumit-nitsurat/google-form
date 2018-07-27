import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    render() {
        const { items, selectedItem, containerClass } = this.props;
        return (
            <div className="form-group">
                <label for="recipient-name" className="control-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" onChange={this.onChange}/>
            </div>
        )
    }

    onChange(item) {
        this.props.onChange(item);
    }


}

export default InputField;