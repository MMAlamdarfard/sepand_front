import http from '@/Api/api';

interface Response<T> {
  success: boolean;
  data: T | string;
}

async function getRequest<T>(url: string): Promise<Response<T>> {
  try {
    const response = await http.get(url);
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        data: response.data as T,
      };
    } else {
      return {
        success: false,
        data: response.data.message ?? 'خطای نامشخص',
      };
    }
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : 'خطای نامشخص',
    };
  }
}

async function postRequest<T>(url: string, data: any): Promise<Response<T>> {
  try {
    const response = await http.post(url, data);
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        data: response.data as T,
      };
    } else {
      return {
        success: false,
        data: response.data.message ?? 'خطای نامشخص',
      };
    }
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : 'خطای نامشخص',
    };
  }
}

async function deleteRequest<T>(url: string): Promise<Response<T>> {
  try {
    const response = await http.delete(url,);
    if (response.status === 200 || response.status === 204) {
      return {
        success: true,
        data: response.data as T,
      };
    } else {
      return {
        success: false,
        data: response.data.message ?? 'خطای نامشخص',
      };
    }
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : 'خطای نامشخص',
    };
  }
}

async function patchRequest<T>(url: string, data: any): Promise<Response<T>> {
  try {
    const response = await http.patch(url, data);
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        data: response.data as T,
      };
    } else {
      return {
        success: false,
        data: response.data.message ?? 'خطای نامشخص',
      };
    }
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : 'خطای نامشخص',
    };
  }
}

async function putRequest<T>(url: string, data: any): Promise<Response<T>> {
  try {
    const response = await http.put(url, data);
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        data: response.data as T,
      };
    } else {
      return {
        success: false,
        data: response.data['message'] ?? 'خطای نامشخص',
      };
    }
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : 'خطای نامشخص',
    };
  }
}

export const ApiCall = {
  getRequest,
  postRequest,
  deleteRequest,
  patchRequest,
  putRequest,
};