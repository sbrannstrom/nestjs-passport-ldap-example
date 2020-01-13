import * as Strategy from 'passport-ldapauth';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, 'ldap') {
	constructor(
	) {
		super({
			passReqToCallback: true,
			server: {
				url: 'ldap://127.0.0.1:389',
				bindDN: 'root',
				bindCredentials: 'password',
				searchBase: 'o=users,o=example.com',
				searchFilter: '(uid={{username}})',
				searchAttributes: ['displayName', 'mail'],
			},
		}, async (req: Request, user: any, done) => {
			req.user = user;
			return done(null, user);
		});
	}

}