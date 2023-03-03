import { fetchData, fetchDataFromAPI } from "../../../utils/axios";

export const getPostsThunk = async (
  url: string,
  thunkAPI: any
): Promise<IPost[]> => {
  try {
    const resp = await fetchData.get(url);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during fetching posts"
    );
  }
};

export const getSinglePostThunk = async (url: string, thunkAPI: any) => {
  try {
    const resp = await fetchData.get(url);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during fetching post"
    );
  }
};

export const getPostCommentsThunk = async (url: string, thunkAPI: any) => {
  try {
    const resp = await fetchDataFromAPI.get(url);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during fetching post comments"
    );
  }
};

export const createPostThunk = async (
  url: string,
  post: IPost,
  thunkAPI: any
): Promise<IPost> => {
  try {
    const resp = await fetchData.post(url, post);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during creating new post"
    );
  }
};

export const deletePostThunk = async (url: string, thunkAPI: any) => {
  try {
    const resp = await fetchData.delete(url);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during deleting post"
    );
  }
};

export const updatePostThunk = async (
  url: string,
  updatedPost: IPost,
  thunkAPI: any
) => {
  try {
    const resp = await fetchData.put(url, updatedPost);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      "There has been an error during updating  post"
    );
  }
};
