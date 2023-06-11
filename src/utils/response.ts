import type { Response } from 'express'

export class Res {
  constructor(res: Response, statusCode: number, data: unknown) {
    res.status(statusCode).json({
      status: statusCode,
      error: false,
      message: 'success',
      data,
    })
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
