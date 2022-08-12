export interface post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
}
