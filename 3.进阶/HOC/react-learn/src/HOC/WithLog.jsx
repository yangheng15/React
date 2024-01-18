import React, { Component } from 'react';

export default function WithLog(Cmp) {
  return class LogWrapper extends Component {
      componentDidMount() {
          console.log(`${Cmp.name}组件挂载`);
      }

      componentWillUnmount() {
          console.log(`${Cmp.name}组件卸载`);
      }

      render() {
          return <Cmp {...this.props} />;
      }
  };
}
