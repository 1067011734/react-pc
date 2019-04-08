import React from 'react';
import styles from './index.css';
import Card from "@/components/Card";
import router from 'umi/router';
import { directive } from '@babel/types';

const handleClick=()=>{
  router.push('/user');
}

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list} onClick={handleClick}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <Card
          title="你好"
          operactin={<div>222222</div>}
        />
      </ul>
    </div>
  );
}
