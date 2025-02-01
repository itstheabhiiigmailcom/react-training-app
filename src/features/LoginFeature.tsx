export const loginUser = async (
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Invalid credentials');
    }

    return { success: true, message: 'Login successful' };
  } catch (error: unknown) {
    // Ensure error is properly typed
    let errorMessage = 'Login failed';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return { success: false, message: errorMessage };
  }
};
