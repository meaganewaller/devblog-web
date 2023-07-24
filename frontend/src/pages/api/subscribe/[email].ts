import axios from 'axios'

export default (req, res) => {
  const { email } = req.query;
  const api_key = process.env.CONVERTKIT_API_KEY;
  const form_id = process.env.CONVERTKIT_FORM_ID;
  const tags = [];
  axios.post(`https://api.convertkit.com/v3/forms/${form_id}/subscribe`, {
    api_key,
    email,
    tags,
  })
  res.sendStatus(200)
}
