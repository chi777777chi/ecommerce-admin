import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  // 註解掉登入驗證
  // await isAdminRequest(req,res);

  const YOUR_API_BASE_URL = process.env.YOUR_API_BASE_URL;

  if (method === 'GET') {
    if (req.query?.id) {
      const response = await fetch(`${YOUR_API_BASE_URL}/products/${req.query.id}`);
      const data = await response.json();
      res.json(data);
    } else {
      const response = await fetch(`${YOUR_API_BASE_URL}/products`);
      const data = await response.json();
      res.json(data);
    }
  }

  if (method === 'POST') {
    const {title, description, price, images, category, properties} = req.body;
    const response = await fetch(`${YOUR_API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title, description, price, images, category, properties
      })
    });
    const data = await response.json();
    res.json(data);
  }

  if (method === 'PUT') {
    const {title, description, price, images, category, properties, _id} = req.body;
    const response = await fetch(`${YOUR_API_BASE_URL}/products/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title, description, price, images, category, properties
      })
    });
    const data = await response.json();
    res.json(data);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      const response = await fetch(`${YOUR_API_BASE_URL}/products/${req.query.id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      res.json(data);
    }
  }
}