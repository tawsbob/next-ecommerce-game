import PropTypes from 'prop-types';
import { concatClass, getStyleClass } from '@utils';
  //import { } from '@components';
  import styles from './Component.module.scss';
  
  function Wrapper({ className, children }){
      return (
        <div className={concatClass(getStyleClass(styles, 'container'), className)}>
          { children }
        </div>
      )
  }
  
  Wrapper.defaultProps = {
    className: null,
  }
  Wrapper.propTypes = {
    className: PropTypes.string
  }
  export default Wrapper