import { Module } from '@nestjs/common';
import { UsersService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entity/user";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule.forFeature([User])]
})
export class UserModule {}
