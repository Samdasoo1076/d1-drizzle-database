<h1 align="center">Cloudflare D1 SQL + Cloudflare Pages DB APi 서버</h1>

# 시작하기

## 필수 구성 요소

1. Node.js >=v20.11.0
2. pnpm >=v9.15.1

⚠️ **Warning**: `엔드포인트` 확인하기

## 빠른 시작

Cloudflare 계정 설정은 미리 해야됩니다
API 발급 등

```sh
npm install -g wrangler // wrangler 설치
```

```sh
wrangler init //초기화
```

```sh
wrangler dev //로컬에서 실행 DB는 연결 안됨
```

## 배포시 명령어

```sh
wrangle deploy //빌드 배포하기
```

**이슈번호 [tag] 커밋 내용 요약**

ex. #123 [feat] 로그인 구현

| tag      | description                                                      |
| -------- | ---------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                                 |
| post     | 새 글 추가                                                       |
| fix      | 자잘한 수정                                                      |
| bugfix   | 버그 수정                                                        |
| refactor | 코드 리팩토링 시에만 사용                                        |
| chore    | config 및 라이브러리, 빌드 관련 파일 수정 (프로덕션 코드 수정 x) |
| rename   | 파일명, 변수명 수정                                              |
| docs     | 문서 수정                                                        |
| comment  | 주석 추가 및 수정                                                |
| remove   | 기능 삭제 및 파일 삭제                                           |
| test     | 테스트 코드 작성                                                 |
| hotfix   | hotfix                                                           |
