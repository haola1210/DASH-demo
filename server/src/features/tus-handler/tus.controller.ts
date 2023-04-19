import { Controller, All, Req, Res, Get, Post, Patch } from '@nestjs/common';
import TusService from './tus.service';

@Controller('uploads')
export default class TusController {
  constructor(private tusServ: TusService) {}

  @Get('test')
  test() {
    return 'ok';
  }

  @Post()
  async postHandler(@Req() req, @Res() res) {
    this.tusServ.handleTus(req, res);
  }

  @Patch('*')
  async patchHandler(@Req() req, @Res() res) {
    this.tusServ.handleTus(req, res);
  }
}
