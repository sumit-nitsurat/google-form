import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    render() {
        const { items, selectedItem, containerClass } = this.props;
        return (
            <div className={containerClass}>
                <button id="dropdownMenuButton1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-dropdown btn-block btn-sm">{selectedItem}</button>
                <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu">
                    <div className="menu-conteiner">
                        <div className="menu-section">
                            {items && items.map((item, idx) => <a key={idx} onClick={this.onChange.bind(this, item)} className="dropdown-item">{item}</a>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onChange(item) {
        this.props.onChange(item);
    }


}

export default Dropdown;