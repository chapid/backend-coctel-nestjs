import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CoctelService } from './coctel.service';
import { CoctelDTO } from './coctel.dto';
import { CoctelEntity } from './coctel.entity';

@Controller('coctel')
export class CoctelController {
    constructor(private readonly servicce: CoctelService){}

    @Get()
    @ApiOperation({summary: 'Consultar todos los cocteles de la BD'})
    async getCocteles(): Promise<CoctelEntity[]>{
        return await this.servicce.getAllCocteles();
    }

    @Post()
    @ApiOperation({summary: 'Agregar cocteles a la BD'})
    async addCoctel(@Body() coctel: CoctelDTO): Promise<CoctelEntity>{
        console.log('Coctel agregado a BD');
        return await this.servicce.AddCoctel(coctel);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Eliminar cocteles de la BD'})
    async deleteCoctel(@Param() params){
        console.log('Coctel eliminado de la BD');
        return await this.servicce.deleteCoctel(params.id);
    }

}
