import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import Icon from '../icon/index';

function preventDefault(e) {
    e.preventDefault();
}
export default class Password extends Input {
    state = {
        hint: 'eye-close',
        htmlType: 'password',
    };

    static getDerivedStateFromProps = Input.getDerivedStateFromProps;

    static propTypes = {
        ...Input.propTypes,
        /**
         * 是否展示切换按钮
         */
        showToggle: PropTypes.bool,
    };
    static defaultProps = {
        ...Input.defaultProps,
        showToggle: true,
    };

    toggleEye = e => {
        e.preventDefault();
        if (this.props.disabled) return;
        const eyeClose = this.state.hint === 'eye';

        this.setState({
            hint: eyeClose ? 'eye-close' : 'eye',
            htmlType: eyeClose || !this.props.showToggle ? 'password' : 'text',
        });
    };

    render() {
        const { showToggle, ...others } = this.props;
        const { hint, htmlType } = this.state;

        const extra = showToggle ? <Icon type={hint} onClick={this.toggleEye} onMouseDown={preventDefault} /> : null;

        return <Input {...others} extra={extra} htmlType={htmlType} />;
    }
}
