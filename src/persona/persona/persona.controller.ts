import { Controller, Get } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }

  @Get('/hello')
  getHello(): any {
    return this.personaService.getDataFromDB();
  }
}
