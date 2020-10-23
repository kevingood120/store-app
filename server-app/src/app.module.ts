import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Connection } from 'typeorm';
import { AddressModule } from './address/address.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
