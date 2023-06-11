export class ClientError extends Error {
  statusCode = 500
  constructor(message: string, statusCode: number) {
    super(message)
    if (statusCode) {
      this.statusCode = +statusCode
    }
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
