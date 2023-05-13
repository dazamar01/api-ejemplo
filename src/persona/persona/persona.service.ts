import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonaService {
  constructor() { };

  getDataFromDB(): any {
    return {
      nombre: 'Daniel',
    };
  }
}
