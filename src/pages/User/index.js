import { Component } from 'react';
import { getUserData } from '@/apis/user';
import { inject, observer } from 'mobx-react';

class App extends Component {
  componentDidMount() {
    getUserData({ a: 1 }, { okMsg: '审批提交成功' }).then(data => {
      console.info(data, 22);
    });
  }

  render() {
    return (
      <div>
        {this.props.name}
        <p>4444</p>
      </div>
    );
  }
}

export default inject(({ stores }) => ({
  name: stores.Home.name,
  setTitle: stores.Home.setTitle,
}))(observer(App));
