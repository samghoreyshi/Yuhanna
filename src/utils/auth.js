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

export const updateUserProfile = async (userId, jwt, data) => {
  try {
    console.log('Updating user profile with data:', data);
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log('Profile update response:', responseData);

    if (!response.ok) {
      console.error('Profile update error response:', responseData);
      throw new Error(responseData.error?.message || 'Failed to update profile');
    }

    return responseData;
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
};

export const registerUser = async (username, email, password, FirstNameLastName, CodeMelli, PhoneNumber) => {
  try {
    // First, register the user with basic info
    const registerResponse = await fetch(`${API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    
    const registerData = await registerResponse.json();
    console.log('Registration response:', registerData);
    
    if (!registerResponse.ok) {
      return { success: false, error: registerData.error.message };
    }

    // Now update the user profile with additional fields
    try {
      const updatedUser = await updateUserProfile(
        registerData.user.id,
        registerData.jwt,
        {
          FirstNameLastName,
          CodeMelli,
          PhoneNumber,
        }
      );

      return {
        success: true,
        data: {
          jwt: registerData.jwt,
          user: updatedUser
        }
      };
    } catch (updateError) {
      console.error('Failed to update profile:', updateError);
      // If update fails, return the basic user data
      return {
        success: true,
        data: {
          jwt: registerData.jwt,
          user: registerData.user
        }
      };
    }
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'An error occurred during registration' };
  }
};
