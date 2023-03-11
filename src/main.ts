import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))

  const options = new DocumentBuilder()
  .setTitle('Backend para la gestion de cocteles')
  .setDescription('Crud basico de cocteles API-REACT')
  .setVersion('1.0.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/v1/docs',app,document,{swaggerOptions:{filter:false}});
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
