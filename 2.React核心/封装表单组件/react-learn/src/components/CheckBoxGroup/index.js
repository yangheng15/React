import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxGroup extends Component {
    static defaultProps = {
        datas: [], // 默认值为空数组
        value: [],
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        datas: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                label: PropTypes.string,
            })
        ),
        value: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func.isRequired,
    };

    getCheckBoxes() {
        return this.props.datas.map(({ value, label }) => {
            return (
                <label key={value}>
                    <input
                        type="checkbox"
                        value={value}
                        name={this.props.name}
                        onChange={this.handleChange}
                        checked={this.props.value.includes(value)}
                    />
                    {label}
                </label>
            );
        });
    }

    handleChange = (e) => {
        const curChooseVal = e.target.value;
        if (e.target.checked) {
            this.props.onChange([...this.props.value, curChooseVal]);
        } else {
            this.props.onChange(this.props.value.filter((it) => it !== curChooseVal));
        }
    };

    render() {
        const checkboxList = this.getCheckBoxes();
        return <div>{checkboxList}</div>;
    }
}
