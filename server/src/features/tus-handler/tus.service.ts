import { Injectable, Inject } from '@nestjs/common';
import { Server } from '@tus/server';
import { INJECTABLE_TOKEN } from 'src/constants';

@Injectable()
export default class TusService {
  constructor(@Inject(INJECTABLE_TOKEN.TUS_SERVER) private tusServer: Server) {
    /* empty */
  }

  async handleTus(req, res) {
    return this.tusServer.handle(req, res);
  }
}
