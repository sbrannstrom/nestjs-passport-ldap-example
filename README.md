<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework with LDAP Passport authentication example.
<br>
Created by Simon Brännström.

## Installation

```bash
yarn
```

## Running the app (in development mode)

```bash
yarn run start
```

## Example LDAP lookup

```bash
curl --request POST \
 --url http://localhost:3000/ldap \
 --header 'Content-Type: application/json' \
 --data '{"username": "gauss", "password": "password"}'
```

## Example response

```bash
{"dn":"uid=gauss,dc=example,dc=com","controls":[],"objectClass":["inetOrgPerson","organizationalPerson","person","top"],"cn":"Carl Friedrich Gauss","sn":"Gauss","uid":"gauss","mail":"gauss@ldap.forumsys.com"}
```


```bash
# watch mode
$ yarn run start:dev
```
## Author
Created by Simon Brännström January 2020.

## License

  Nest is [MIT licensed](LICENSE).
