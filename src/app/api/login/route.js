const API_URL = 'https://admin.yuhanna.ir/api';

export const loginUser = async (identifier, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.error.message };
    }
  } catch (error) {
    return { success: false, error: 'An error occurred during login' };
  }
};