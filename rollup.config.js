import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/js/script.js',
  plugins: [ babel() ],
  format: 'umd'
};
