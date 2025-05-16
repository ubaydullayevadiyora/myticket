// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   HttpCode,
//   Res,
// } from "@nestjs/common";
// import { AuthService } from "./auth.service";
// import { Response } from "express";

// @Controller("auth")
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post("login")
//   @HttpCode(200)
//   create(
//     @Body() loginDto: LoginDto,
//     @Res({ passthrough: true }) res: Response
//   ) {
//     return this.authService.loginAdmin(loginDto, res);
//   }
// }
