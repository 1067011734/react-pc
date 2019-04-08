import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export interface CardProps {
  // 标题
  title: string;
  // 操作
  operactin: React.ReactNode;
}
export default class Card extends PureComponent<CardProps, {}> {
  static defaultProps = {
    title: 'hello world',
  };

  render() {
    const { title, operactin } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>{operactin}</span>
      </div>
    );
  }
}
