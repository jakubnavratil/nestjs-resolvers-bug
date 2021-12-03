## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Repro

Open http://localhost:3000/graphql
Run

```graphql
mutation A {
  moduleALogin(code: "code")
}
mutation B {
  moduleBLogin(username: "username")
}
```

A works but B dont
