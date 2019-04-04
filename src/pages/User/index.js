import { PureComponent } from 'react';
import { getUserData } from '@/apis/user';

export default class app extends PureComponent {
  componentDidMount() {
    getUserData({ a: 1 });
  }

  render() {
    return <p>4444</p>;
  }
}
