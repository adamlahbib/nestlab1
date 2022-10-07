import { Global, Module } from '@nestjs/common';
import { GenerateIDService } from './common.service';

@Global()
@Module({
    providers: [GenerateIDService],
    exports: [GenerateIDService]
})
export class CommonModule {}
