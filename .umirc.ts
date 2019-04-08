import { IConfig } from 'umi-types';
import path from 'path';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'umi',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  history: 'hash',
  alias:{
    '@components': path.resolve(__dirname, 'src/components')
  },
  publicPath:'./',
  define: {
    "process.env.APP_KEY": process.env.APP_KEY || 'daily',
  },
}

export default config;
