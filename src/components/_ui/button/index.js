import PropTypes from 'prop-types';
    import { concatClass, getStyleClass } from '@utils';
      //import { } from '@components';
      import styles from './Component.module.scss';
      
      function Button({ className }){
          return (
            <div className={concatClass(getStyleClass(styles, 'container'), className)}>
            </div>
          )
      }
      
      Button.defaultProps = {
      
      }
      Button.propTypes = {
      }
      export default Button
      