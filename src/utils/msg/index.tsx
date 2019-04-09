import React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import style from './index.less';

const prefixCls = 'msg-wrap';

export interface CardProps {
  // 自动关闭延时，单位毫秒
  duration: number;
  // 标题
  title: string;
  // 父元素，用于关闭提示框
  warpNode: any;
  // 类型
  type: string;
}

class Msg extends React.Component<CardProps, {}> {
  state = {
    fadeOut: false,
  };

  componentDidMount() {
    const { warpNode, duration } = this.props;

    setTimeout(() => {
      this.setState(
        {
          fadeOut: true,
        },
        () => {
          setTimeout(() => {
            const unmountResult = ReactDOM.unmountComponentAtNode(warpNode);
            if (unmountResult && warpNode.parentNode) {
              warpNode.parentNode.removeChild(warpNode);
            }
          }, 500);
        },
      );
    }, duration);
  }
  render() {
    const { title, type } = this.props;
    const { fadeOut } = this.state;

    const className = classNames({
      [style[prefixCls]]: true,
      [style[`${prefixCls}-leave`]]: fadeOut,
      [style[`${prefixCls}-${type}`]]: true
    });

    return <div className={className}>{title}</div>;
  }
}

export const okMsg = (title, time = 2000) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Msg duration={time} title={title} warpNode={div} type="info" />, div);
};

export const errorMsg = (title, time = 2000) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Msg duration={time} title={title} warpNode={div} type="error" />, div);
};
