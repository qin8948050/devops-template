import { Request, Response } from 'express';

const getDemoList = (req: Request, res: Response) => {
  res.json({
    status: 0,
    msg: '获取成功',
    data: [
      {
        name: 'a',
        id: 1,
      },
      {
        name: 'b',
        id: 2,
      },
    ],
  });
};

export default {
  'GET /api/demoList': getDemoList,
};
