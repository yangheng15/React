import React from 'react';
import PropTypes from 'prop-types';

export default class Test extends React.Component {
    // 默认属性值
    static defaultProps = {
        msg: 'hello world',
    };

    // 属性的类型检查
    static propTypes = {
        msg: PropTypes.string,
    };

    render() {
        return this.props.msg;
    }
}
