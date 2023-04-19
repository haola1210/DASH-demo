import { Module } from '@nestjs/common';
import TusController from './tus.controller';
import TusService from './tus.service';
import { INJECTABLE_TOKEN } from 'src/constants';
import { Server } from '@tus/server';
import { FileStore } from '@tus/file-store';
import { v4 as uuid } from 'uuid';
import * as path from 'path';

@Module({
  controllers: [TusController],
  providers: [
    {
      provide: INJECTABLE_TOKEN.TUS_SERVER,
      useFactory: () => {
        return new Server({
          path: '/uploads',
          datastore: new FileStore({
            directory: path.join(__dirname, '..', '..', '..', 'uploads'),
          }),
          async onUploadFinish(req, res, upload) {
            // will need in the future
            return res;
          },
          async onUploadCreate(req: any, res, upload) {
            return res;
          },
          namingFunction(req: any) {
            const metaList = req.header('upload-metadata').split(',');
            const meta = metaList.reduce((obj, item) => {
              const [key, base64Val] = item.split(' ');
              // decode
              const buffer = Buffer.from(base64Val, 'base64');
              const val = buffer.toString('utf-8');
              //
              obj[key] = val;
              return obj;
            }, {} as Record<string, string>);
            req.parsedMeta = meta;
            return `${uuid()}.${meta.filename}`;
          },
        });
      },
    },
    TusService,
  ],
})
export default class TusModule {}
