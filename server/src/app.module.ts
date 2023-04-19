import { Module } from '@nestjs/common';
import TusModule from './features/tus-handler/tus.module';

@Module({
  imports: [TusModule],
})
export class AppModule {}
