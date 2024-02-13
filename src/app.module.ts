import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DATABASE_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}