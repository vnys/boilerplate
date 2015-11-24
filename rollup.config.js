import babel from 'rollup-plugin-babel';

export default {
  entry: 'js/script.js',
  plugins: [ babel() ],
  format: 'umd'
};
