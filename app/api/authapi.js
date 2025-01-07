'use server'
import { redirect } from 'next/navigation';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:80';
// 註冊
export async function register(registerData) {
  try {
    // console.log('Sending data:', registerData); // 添加這行來檢查
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData)
    });
    console.log('Response:', response);
    const data = await response.json();
    
    return {
      status: response.ok,
      message: data.message || '',
      data: data.data
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
}
// 登入
export async function login(loginData) {
  console.log(loginData);
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    });

    const data = await response.json();

   
    return {
      status: response.ok,
      message: data.message || '',
      data: data
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
}
// 取得使用者詳細資料
export async function getUserDetails(userId) {
  try {
    const response = await fetch(`${API_URL}/api/members/get?id=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    return {
      status: response.ok,
      message: data.message || '',
      data: data.data
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null
    };
  }
}