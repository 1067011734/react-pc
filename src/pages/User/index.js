import { PureComponent } from 'react';
import { getUserData } from '@/apis/user';

export default class app extends PureComponent {
  componentDidMount() {
    getUserData({ a: 1 })
    .then(data=>{
      console.info(data,22)
    });
  }

  render() {
    return <p>4444</p>;
  }
}
