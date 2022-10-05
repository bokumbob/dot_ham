import { myData } from 'etc/fbase';

export const ranking = async (data: number): Promise<number> => {
  const prevData = await myData().then(res => res.seeds);
  let returnData: number;
  if (data > prevData) {
    returnData = data;
  } else {
    returnData = prevData;
  }
  return returnData;
};
