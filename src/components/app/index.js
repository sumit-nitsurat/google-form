import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logo from '../../logo.svg';
import './App.css';
import Dropdown from '../../ui/dropdown';
import FormComponent from '../formComponent';
import { setFromComponent } from '../../actions/formAction';

const entityList = ['Dropdown', 'RadioBox', 'Inputbox'];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: entityList[0]
        }
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.addComponent = this.addComponent.bind(this);
    }
    render() {
        const { entity } = this.state;
        const {componentList} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Dropdown
                        selectedItem={entity}
                        name="entity"
                        containerClass="dropdown"
                        onChange={this.onDropdownChange}
                        items={entityList} />
                </p>
                <button type="button" class="btn btn-default" onClick={this.addComponent}>Add Another</button>
                <div>
                    {this.renderFormComponent(componentList)}
                </div>
            </div>
        );
    }

    renderFormComponent(componentList) {
        return componentList.map(component => <FormComponent component={component} />)
    }    

    onDropdownChange(value) {
        this.setState({ entity: value});
    }

    addComponent() {
        const {  entity } = this.state;
        const {componentList} = this.props;
        let components = JSON.parse(JSON.stringify(componentList));
        components.push(entity);
        this.props.setFromComponent(components);
    }
}

const mapStateToProps = state => ({
    componentList: state.formReducer.componentList
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setFromComponent
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);