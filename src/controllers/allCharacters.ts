// // import {} from '@/data';
// // import { response } from '../utils';

import type { Request, Response } from "express";

// import type { Request, Response } from 'express'
// import { Res } from '@/utils'

// export default async function (req: Request, res: Response) {
//   // const allCharacters = await characters.getAll()
//   // response(res, 200, allCharacters)
//   return new Res(res, 200, { hola: 'hola' })
// }

export const getRecipes = async (req: Request, res: Response) => {
  const { name } = req.query;
  // try {
  //   // const allData = await getAllInfo()
  //   // ///////////////////////////////////////////////////////////////////
  //   // if (allData.code === 401)
  //   //   return res
  //   //     .status(401)
  //   //     .json({ error: 'You are not authorized. Please api-key valid' })
  //   // ////////////////////////////////////////////////////////////////////
  //   // if (allData.code === 402)
  //   //   return res
  //   //     .status(402)
  //   //     .json({ error: 'limit of 150 requests per day reached ' })
  //   // ////////////////////////////////////////////////////////////////////
  //   if (name) {
  //     const allDataName = allData.filter((el) =>
  //       el.name.toLowerCase().includes(name.toLowerCase())
  //     )
  //     /*-------------------------------------------------------*/
  //     return allDataName.length
  //       ? res.status(200).json(allDataName)
  //       : res.status(204).send({ msg: 'recipe not content' })
  //   }
  //   /////////////////////////
  //   return res.json(allData)
  //   ////////////////////////
  // } catch (error) {
  //   return res.status(500).send('Error Inesperado')
  // }
};
