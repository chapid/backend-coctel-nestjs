import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CoctelApiService } from '../service/coctelapi.service';

@Controller('apicoctel')
export class CoctelApiController {


    constructor(
        private readonly serviceCoctel: CoctelApiService
    ){}

    @Get()
    @ApiOperation({
        summary: 'Consulta todos los cocteles del API www.thecocktaildb.com/api'
    })
    async findCocteles(){
        return this.serviceCoctel.findCocteles();
    }


    @Get(':valor')
    @ApiOperation({
        summary: 'Consulta los cocteles filtrados por un valor'
    })
    async findCoctelFilter(@Param() params){        
        return this.serviceCoctel.findCoctelesFilter(params.valor);
    }
}


