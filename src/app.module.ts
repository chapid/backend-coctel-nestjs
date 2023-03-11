import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoctelApiController } from './apicoctel/controllers/coctelapi.controller';
import { CoctelApiService } from './apicoctel/service/coctelapi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CoctelModule } from './coctel/coctel.module';
import { CoctelEntity } from './coctel/coctel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'cocteldb',
    entities: [CoctelEntity],
    synchronize: true,
  }),HttpModule, CoctelModule],
  controllers: [AppController, CoctelApiController],
  providers: [AppService, CoctelApiService],
})
export class AppModule {}
