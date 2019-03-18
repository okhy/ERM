import {Component} from 'react'
import styles from './styles.css'

class ClassComponent extends Component {
  constructor(){
    super()
  }
  render(){
    return <span className={styles.main}>Class Component contents.</span>
  }
}

export default ClassComponent
