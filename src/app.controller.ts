import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import * as passport from 'passport';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@UseGuards(AuthGuard('ldap'))
	@Post('ldap')
	ldapLogin(@Req() req) {
		passport.authenticate('ldap', { session: false });
		return req.user;
	}
}
