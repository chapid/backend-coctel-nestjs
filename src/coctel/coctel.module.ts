import { Module } from '@nestjs/common';
import { CoctelController } from './coctel.controller';
import { CoctelService } from './coctel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoctelEntity } from './coctel.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CoctelEntity])],
    controllers: [CoctelController],
    providers: [CoctelService],
})
export class CoctelModule {}
