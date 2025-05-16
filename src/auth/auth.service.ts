// import { JwtService } from "@nestjs/jwt";
// import { BadRequestException, Injectable } from "@nestjs/common";
// import { AdminDocument } from "../admins/schemas/admin.schema";
// import { AdminsService } from "../admins/admins.service";

// @Injectable()
// export class AuthService {
//   constructor(private readonly jwtService: JwtService,
//     private readonly adminService: AdminsService
//   ) {}

//   async generateTokens(admin: AdminDocument) {
//     const payload = {
//       id: admin.id,
//       is_creator: admin.is_creator,
//       is_active: admin.is_active,
//     };

//     const [accessToken, refreshToken] = await Promise.all([
//       this.jwtService.signAsync(payload, {
//         secret: process.env.ACCESS_TOKEN_KEY,
//         expiresIn: process.env.ACCESS_TOKEN_TIME,
//       }),
//       this.jwtService.signAsync(payload, {
//         secret: process.env.REFRESH_TOKEN_KEY,
//         expiresIn: process.env.REFRESH_TOKEN_TIME,
//       }),
//     ]);

//     return { accessToken, refreshToken };
//   }
//   create(createAuthDto: CreateAuthDto) {
//     return "This action adds a new auth";
//   }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }

//   async signOut(id: string, res: Response) {
//     const admin = await this.adminService.findOne(id);
//     if (!admin) throw new BadRequestException("Admin topilmadi");

//     admin.hashed_refresh_token = null;
//     await admin.save();

//     res.clearCookie("refresh_token");

//     return { message: "Admin tizimdan chiqdi" };
//   }
// }
