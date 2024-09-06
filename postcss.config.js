import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({
        'nesting-rules': true,
      'media-query-ranges': true,
      stage: 2,
    }),
  ],
}