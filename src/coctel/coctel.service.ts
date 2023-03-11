import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoctelDTO } from './coctel.dto';
import { CoctelEntity } from './coctel.entity';

@Injectable()
export class CoctelService {

    constructor(
        @InjectRepository(CoctelEntity)
        private coctelRepository: Repository<CoctelEntity>
    ){}

    async AddCoctel(coctel: CoctelDTO):Promise<any>{
        let item = new CoctelEntity();
        item.id_coctel = coctel.id_coctel;
        item.nombre_coctel = coctel.nombre_coctel;
        item.keys_coctel = coctel.keys_coctel;
        item.instr_coctel = coctel.instr_coctel;
        item.data_coctel = coctel.data_coctel;
        item.categoria_coctel = coctel.categoria_coctel;
        item.img_coctel = coctel.img_coctel;
        const new_coctel =  await this.coctelRepository.save(item);
        return new_coctel;
    }


    getAllCocteles(): Promise<CoctelEntity[]>{
        return this.coctelRepository.find();
    }

    async deleteCoctel(id: string): Promise<void>{
        await this.coctelRepository.delete(id);
    }
}
