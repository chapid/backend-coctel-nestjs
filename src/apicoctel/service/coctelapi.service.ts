import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class CoctelApiService {
  constructor(private http: HttpService) {}

  async findCocteles() {

    return await this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
      .pipe(
        map((res) => {
            return res.data.drinks
        }))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API no disponible');
        }),
      );
  }


  async findCoctelesFilter(filtro: any) {
    try {
        return await this.http
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filtro}`)
        .pipe(
          map((res) => {               
            return res.data;
          }),
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API no disponible');
          }),
        );
    } catch (error) {
        return{
            info: 'No se encontro data'
        }
    }
  }
}
