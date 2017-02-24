https://github.com/webpack/webpack



### plugin
1. common-chunks-webpack-plugin
2. extract-text-webpack-plugin
3. component-webpack-plugin
4. compression-webpack-plugin
5. i18n-webpack-plugin
6. html-webpack-plugin


###todo
1. html을 자동으로 압축한다.
2. css를 자동으로 압축한다.
3. js를 자동으로 압축한다.
4. 경로는 원하는 곳으로 이동시킬 수 있도록 한다.
5. build본과 원본이 구분이 될 수 있어야 한다.
6. 이미지는 자동으로 최적화될 수 있어야 한다.
7. 이미지가 원하는 s3버킷으로 자동으로 업로드될 수 있도록 해야 한다.
8. es6문법을 통해서 작성된 js파일 내에 css는 어떻게 처리되는지 확인을 해야 한다.
9.




### index
1. npm install html-webpack-plugin --save-dev
2. webpack을 실행하기 위해서는 글로벌로 하나 깔아두어야 실행할 수 있다.
3. webpack을 통해서 핸들바 템플릿을 압축해보도록 한다.
4. 스크립트 파일을 빌드해서 옮기는 것은 쉽게 된다. 그러나 html을 압축해서 새롭게 떨구는 건 쉽지 않다.
5. es6와 의존성 모듈을 테스트하기 위해서
npm install babel-loader --save-dev

babel-core
babel-loader
babel-preset-es2015

(result)
# webpack
(node:89768) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
Hash: 4f40e78cb6210356a925
Version: webpack 2.2.1

아래의 로더가 필요하다.
npm i --save-dev html-loader
npm i handlebars-loader --save-dev


아래 이슈를 보고 해결을 해야 한다.
https://github.com/webpack/loader-utils/issues/56

여기까지 진행하면 hbs를 html로 변환할 수 있다.
그런데 서버에서 내려주는 데이터를 함께 실어서 내려줄 수 있을까?

템플릿을 템플릿 상태로 내려줄 수 없는가??
