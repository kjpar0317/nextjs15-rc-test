interface Login {
  email: string;
  password: string;
  name?: string;
  group?: string;
  status?: boolean;
}

interface Token {
  token: string;
  refreshToken?: string;
  status?: boolean;
}
