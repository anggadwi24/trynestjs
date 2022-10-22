
import 'dotenv/config'; 
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MembersModule } from './members/members.module';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(MembersModule);
  await app.listen(port);
 
}
bootstrap();
