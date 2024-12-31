// Usage: import environment from 'src/config/environments';
const environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  AUTH_SECRET: process.env.NEXTAUTH_SECRET,
};

export default environment;
