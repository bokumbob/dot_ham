import { myData } from 'etc/fbase';

export const ranking = async (data: number) => {
  const prevData = await myData().then(res => res!.seeds);
  if (data > prevData) return data;
  else if (data < prevData) return prevData;
  else return 0;
};
