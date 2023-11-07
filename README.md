# 코드잇 스프린트 2기 위클리 미션

Linkbrary라는 웹사이트의 프론트 단을 구현하는 프로젝트입니다.

## 목차

1. [개요](#1.-개요)
2. [웹사이트 설명](#2.-웹사이트-설명)
3. [css 파일](#3.-css-파일)
4. [주차 별 주요 변경 사항](#4.-주차-별-주요-변경-사항)

## 1. 개요

- 프로젝트 명 : Linkbrary
- 프로젝트 지속 기간 : 2023.10.17 ~ 수료시 까지
- 개발 언어 : HTML, CSS
- 개발자 : 김광현

## 2. 웹사이트 설명

### index.html (/)

Library 접속시 먼저 볼 수 있는 메인 페이지입니다.(/)

index.html에서 작동하는 기능은 다음과 같습니다.

- Linkbrary 로고 : 홈 페이지인 index.html로 연결되어있습니다.
- 로그인 버튼 : 로그인을 하는 signin.html로 연결되어있습니다.
- 링크 추가하기 버튼 : 회원가입을 하는 signup.html로 연결되어있습니다.
- privacy policy : 개인정보보안 정책이 작성된 privacy.html로 연결되어 있습니다.
- FAQ : 문의사항faq.html로 연결되어있습니다.

### signin.html (/signin)

메인 페이지의 로그인 버튼을 누를 시 링크되는 로그인 페이지 입니다.

signin.html에서 작동하는 기능은 다음과 같습니다.

- Linkbrary 로고 : 메인 페이지인 index.html로 연결되어있습니다.
- 회원 가입하기 링크 : 회원가입을 하는 signup.html로 연결되어있습니다.
- 로그인 버튼 : 미구현
- 소셜 로그인 : 구글, 카카오의 로고가 있는 버튼이며, 현재 각 사이트로 이동합니다.

### signup.html (/signup)

메인 페이지의 링크 추가하기 버튼을 누를 시 링크되는 회원가입 페이지입니다.

signup.html에서 작동하는 기능은 다음과 같습니다.

- Linkbrary 로고 : 메인 페이지인 index.html로 연결되어있습니다.
- 로그인 하기 링크 : 회원가입을 하는 signin.html로 연결되어있습니다.
- 회원가입 버튼 : 미구현
- 소셜계정으로 가입하기 : 구글, 카카오의 로고가 있는 버튼이며, 현재 각 사이트로 이동합니다.

## 3. css 파일

각 html파일의 스타일이 지정된 파일들입니다.

### reset.css

크로스 브라우징을 위해 브라우저의 기본값을 초기화 하는 파일입니다.

- 기본 font-size를 10px으로 지정하였습니다.

### style.css

색상값 css변수와 버튼의 기본 템플릿을 지정한 파일입니다.

### header.css

메인 페이지(index.html)의 header를 스타일링 하는 파일입니다.

### article.css

메인 페이지(index.html)의 article요소를 스타일링 하는 파일입니다.

### footer.css

메인 페이지(index.html)의 footer를 스타일링 하는 파일입니다.

### sign.css

로그인 페이지(signin.html)와 회원가입 페이지(signup.html)을 스타일링 하는 파일입니다.

- 공통 요소가 많아 한 파일에서 동시에 처리하였습니다.

# 4. 주차 별 주요 변경 사항

## 1주차

- PC사이즈의 랜딩 페이지(index.html) 제작

## 2주차

- 로그인 페이지(signin.html), 회원가입 페이지(signup.html) 제작

## 3주차

- 각 페이지를 반응형으로 모바일, 태블릿, PC에 따라 스타일을 다르게 하도록 수정(@media 사용)
- 웹 폰트의 FOUT 문제를 현재 교육과정에서 줄이기 위해 가변 다이나믹 서브셋으로 로드 하도록 수정

# 5. 개발 기록

## 웹 폰트의 FOUT문제

기존엔 html 단에서 cdn 링크를 이용해 Pretendard 폰트를 로딩했다.
문제는 로딩되는 동안 잠깐 발생하는 FOUT 문제가 발생했다는 것.

https://github.com/orioncactus/pretendard

pretendard의 공식 문서를 참고하여 기본 cdn보다 용량을 줄여 로딩 할 수 있는 <b>가변 다이나믹 서브셋</b>을 알게 되었고, 이를 css 단에 import 하여 사용하였다.

사용해본 결과 로딩 시간이 현저하게 줄었고, 이와 더불어 Pretendard와 큰 차이가 안나는 폰트를 대체 설정하여 이질감이 크게 들지 않도록 변경하였다.

자세한 해결 과정은

https://juniper-chevre-a5a.notion.site/FOUT-72bb48c497454325b25d074e3c297e58?pvs=4
