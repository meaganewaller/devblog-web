import axios from 'axios';
interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 20000,
});

export async function postContactForm(form: ContactFormProps) {
  const result = await apiClient.post('/contact', form);
  return result;
}

export default apiClient;
