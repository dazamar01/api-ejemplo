import { Module } from '@nestjs/common';
import { PersonaController } from './persona/persona.controller';
import { PersonaService } from './persona/persona.service';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule { }
