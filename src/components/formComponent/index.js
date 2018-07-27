import React, { Component } from 'react';
import Dropdown from '../../ui/dropdown';
import InputField from '../../ui/inputfield';

const entityList = ['Dropdown', 'RadioBox', 'Inputbox'];

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: entityList[0]
        }
    }
    render() {
        const { entity } = this.state;
        return (
            <div className="container">
                {this.renderComponent()}
            </div>
        );
    }
    renderComponent() {
        const {entity} = this.state;
        const { component } = this.props;
        switch (component) {
            case entityList[0]:
                return (<Dropdown
                        selectedItem={entity}
                        name="entity"
                        containerClass="dropdown"
                        onChange={this.onDropdownChange}
                        items={entityList} />);
            case entityList[1]:
                return (<InputField />);
            default:
                <InputField />


        }
    }

    onDropdownChange(value) {
        this.setState({ entity: value});
    }
}

export default FormComponent;
