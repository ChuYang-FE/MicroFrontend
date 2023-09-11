
export interface UserData {
  name: string;
  city: string;
  baseAppClick?: number
  subAppClick?: number
}

export const fetchInitialData = () => {
  return new Promise<UserData>(resolve => {
    setTimeout(() => {
      resolve({
        name: 'William',
        city: 'Shenzhen'
      });
    }, 3000);
  });
}