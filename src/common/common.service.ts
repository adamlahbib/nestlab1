import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateIDService {
      generate() {
        return uuid();
      }
}