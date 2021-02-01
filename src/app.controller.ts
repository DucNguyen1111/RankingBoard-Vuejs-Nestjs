import { UserInfo } from './interfaces/user_info';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { json, Response } from 'express';
import { AppService } from './app.service';
import axios from 'axios'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  async getScoreBoard(@Res() res: Response): Promise<any> {
    try {

      const usersInfo: UserInfo[] = [
        {
          name: "Khổng Vũ Huy",
          solvedProblems: 0,
          goal: 101,
          userId: 'neu_nitc_kvhuy',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/neu_nitc_kvhuy/',
          finishing: ''
        },
        {
          name: "Nguyễn Thành Đạt",
          solvedProblems: 0,
          goal: 111,
          userId: 'thdat2706',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/thdat2706/',
          finishing: ''
        },
        {
          name: "Nguyễn Xuân Chiến Thắng",
          solvedProblems: 0,
          goal: 100,
          userId: 'nxcthang_1205',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/nxcthang_1205/',
          finishing: ''
        },
        {
          name: "Dương Viết Thắng",
          solvedProblems: 0,
          goal: 101,
          userId: 'thangbnvh',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/thangbnvh/',
          finishing: ''
        },
        {
          name: "Nguyễn Hoa Sơn",
          solvedProblems: 0,
          goal: 100,
          userId: 'nguyenhoason21',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/nguyenhoason21/',
          finishing: ''
        },
        {
          name: "Nguyễn Viết Đức",
          solvedProblems: 0,
          goal: 160,
          userId: 'duc_306',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/duc_306/',
          finishing: ''
        },
        {
          name: "Phạm Thị Lan Anh",
          solvedProblems: 0,
          goal: 100,
          userId: 'lananh1012',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/lananh1012/',
          finishing: ''
        },
        {
          name: "Dương Văn Hậu",
          solvedProblems: 0,
          goal: 100,
          userId: 'duonghau2706',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/duonghau2706/',
          finishing: ''
        },
        {
          name: "Nguyễn Văn Khương",
          solvedProblems: 0,
          goal: 101,
          userId: 'khuong2601',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/khuong2601/',
          finishing: ''
        },
        {
          name: "Nguyễn Thị Thu Hà",
          solvedProblems: 0,
          goal: 100,
          userId: 'nguyenthuha_01',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/nguyenthuha_01/',
          finishing: ''
        },
        {
          name: "Phạm Văn Hiếu",
          solvedProblems: 0,
          goal: 100,
          userId: 'phamhiey',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/phamhiey/',
          finishing: ''
        },
        {
          name: "Đồng Trần Duy",
          solvedProblems: 0,
          goal: 100,
          userId: 'dtd_nitc',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/dtd_nitc/',
          finishing: ''
        },
        {
          name: "Lê Hồng Nhung",
          solvedProblems: 0,
          goal: 100,
          userId: 'lenhung260302',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/lenhung260302/',
          finishing: ''
        },
        {
          name: "Nguyễn Tiến Nhật",
          solvedProblems: 0,
          goal: 100,
          userId: 'nhat_11193952',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/nhat_11193952/',
          finishing: ''
        },
        {
          name: "Lê Linh Nguyên",
          solvedProblems: 0,
          goal: 120,
          userId: 'i_dra21',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/i_dra21',
          finishing: ''
        },
        {
          name: "Minh Pun",
          solvedProblems: 0,
          goal: 120,
          userId: 's1mp_24',
          linkSPOJ: 'https://www.spoj.com/PTIT/users/s1mp_24',
          finishing: ''
        },
      ]
      const HTMLusers = await Promise.all([
        axios.get(usersInfo[0].linkSPOJ),
        axios.get(usersInfo[1].linkSPOJ),
        axios.get(usersInfo[2].linkSPOJ),
        axios.get(usersInfo[3].linkSPOJ),
        axios.get(usersInfo[4].linkSPOJ),
        axios.get(usersInfo[5].linkSPOJ),
        axios.get(usersInfo[6].linkSPOJ),
        axios.get(usersInfo[7].linkSPOJ),
        axios.get(usersInfo[8].linkSPOJ),
        axios.get(usersInfo[9].linkSPOJ),
        axios.get(usersInfo[10].linkSPOJ),
        axios.get(usersInfo[11].linkSPOJ),
        axios.get(usersInfo[12].linkSPOJ),
        axios.get(usersInfo[13].linkSPOJ),
        axios.get(usersInfo[14].linkSPOJ),
        axios.get(usersInfo[15].linkSPOJ),
      ]);
      const solvedPro = await Promise.all([
        this.appService.countingSolvedProb(HTMLusers[0], usersInfo[0]),
        this.appService.countingSolvedProb(HTMLusers[1], usersInfo[1]),
        this.appService.countingSolvedProb(HTMLusers[2], usersInfo[2]),
        this.appService.countingSolvedProb(HTMLusers[3], usersInfo[3]),
        this.appService.countingSolvedProb(HTMLusers[4], usersInfo[4]),
        this.appService.countingSolvedProb(HTMLusers[5], usersInfo[5]),
        this.appService.countingSolvedProb(HTMLusers[6], usersInfo[6]),
        this.appService.countingSolvedProb(HTMLusers[7], usersInfo[7]),
        this.appService.countingSolvedProb(HTMLusers[8], usersInfo[8]),
        this.appService.countingSolvedProb(HTMLusers[9], usersInfo[9]),
        this.appService.countingSolvedProb(HTMLusers[10], usersInfo[10]),
        this.appService.countingSolvedProb(HTMLusers[11], usersInfo[11]),
        this.appService.countingSolvedProb(HTMLusers[12], usersInfo[12]),
        this.appService.countingSolvedProb(HTMLusers[13], usersInfo[13]),
        this.appService.countingSolvedProb(HTMLusers[14], usersInfo[14]),
        this.appService.countingSolvedProb(HTMLusers[15], usersInfo[15]),
      ]);
      for (let i = 0; i < usersInfo.length; i++) {
        usersInfo[i].solvedProblems += solvedPro[i];
        const finishingPercentage = Math.min(100, (usersInfo[i].goal / 100) * solvedPro[i]);
        usersInfo[i].finishing = finishingPercentage.toFixed(1) + '%';
      }
      usersInfo.sort(function (one, two) {
        return two.solvedProblems - one.solvedProblems;
      })
      res.render('index', {
        users: JSON.stringify(usersInfo)
      })
    } catch (error) {
      res.status(HttpStatus.NO_CONTENT).json({
        message: "Hệ Thống tạm thời đang lỗi ^^!"
      })
    }
  }
}
