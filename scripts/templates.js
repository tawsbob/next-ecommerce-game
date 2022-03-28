function component(name) {
    return `import PropTypes from 'prop-types';
    import { concatClass, getStyleClass } from '@utils';
      //import { } from '@components';
      import styles from './Component.module.scss';
      
      function ${name}({ className }){
          return (
            <div className={concatClass(getStyleClass(styles, 'container'), className)}>
            </div>
          )
      }
      
      ${name}.defaultProps = {
      
      }
      ${name}.propTypes = {
      }
      export default ${name}
      `;
  }
  function scss() {
    return `.container {} `;
  }
  
  function include(component_name, folder_name) {
    return `\nexport { default as ${component_name} } from './${folder_name}/index.js';`;
  }
  
  function page() {
    return `import { Header, Page } from '@components';
    //import {  } from '@utils';
    
    const page = {
      title: '|',
      description: '',
    };
    
    export default function Page() {
      return (
        <Page title={page.title} description={page.description}>
          <main>
            <Header />
          </main>
        </Page>
      );
    }`;
  }
  module.exports = {
    component,
    include,
    scss,
    page,
  }