## Webpack 2.0

#### 1. Example 01
- html-webpack-plugin
- https://github.com/jantimon/html-webpack-plugin
- 기본적으로 output으로 정한 위치에 모든 파일들이 빌드된다.
- 설계 자체가 html 파일에 번들용 js를 자동 삽입될 수 있도록 되어 있다.
- css 파일도 자동으로 삽입될 수 있도록 할 수 있는지 알아보는 게 좋겠다.
- 템플릿 파일을 html로 변환하기 위해서는 반드시 로더의 힘이 필요하니 해당 패키지를 설치해야 한다


### plugin
1. <strong style="color :#1b95e0">html-webpack-plugin</strong>
2. extract-text-webpack-plugin
3. common-chunks-webpack-plugin
4. component-webpack-plugin
5. compression-webpack-plugin
6. i18n-webpack-plugin


### Ref.
1. https://github.com/webpack/webpack
2. https://github.com/webpack-contrib/extract-text-webpack-plugin
3. https://github.com/jantimon/html-webpack-plugin


### To-Do
1. hbs 템플릿을 각각 압축 (원본은 별도의 위치에 저장 혹은 남겨놓아야 한다)
2. css 각각 압축 (html을 제외한 파일들은 압축 및 최적화 되어서 s3의 특정 버킷으로 업로드
- https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
3. js 각각 압축
4. 이미지 최적화


### 문제점
1. js entry를 특정 폴더로 해서 안에 있는 모든 의존성 파일을 하나로 묶고 압축하여 번들링할 수 있도록 하고 싶지만 별도로 처리가 되고 있다
만약 별도로 처리가 될거라면 내가 원하는 형태로 변경할 수 있으면 좋겠지만 그렇게 설정이 안된다
2. css 압축이 실행되지 않는다
3. js압축이 실행되지 않는다 (물론 실행이 전혀 안되는 것이 아니라 원하는 대로 되지 않는다는 것이다)

webpack과 grunt 그리고 gulp의 차이점을 분석해보고 각각의 장점을 도입할 수 있도록 해보자



