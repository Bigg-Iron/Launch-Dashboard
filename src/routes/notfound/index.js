import React from 'react'
import { Link } from 'dva/router'
import styles from './index.less'

const NotFound = () => <div className={styles['page-404']}>
  <section>
    <h1>404</h1>
    <p>Sorry about that <Link to='/'>Go back</Link></p>
  </section>
</div>

export default NotFound
