import { Global, Module } from '@nestjs/common';
import { GenerateIDService } from './common.service';

@Global()
@Module({
    providers: [{
        useValue: GenerateIDService.generate(),
        provide: 'uuid'
    }],
})
export class CommonModule {}
