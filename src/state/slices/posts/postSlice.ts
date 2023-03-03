import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getPostsThunk,
  getSinglePostThunk,
  getPostCommentsThunk,
  createPostThunk,
  deletePostThunk,
  updatePostThunk,
} from "./postThunk";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: IPosts = {
  posts: [],
  singlePost: null,
  comments: [],
  isLoading: false,
  error: "",
  message: "",
  displayAlert: false,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (
    params: { userId: IUser["user"]["id"]; searchKey: string },
    thunkAPI
  ) => {
    return getPostsThunk(
      `posts/?userId=${params.userId}&title_like=${params.searchKey}`,
      thunkAPI
    );
  }
);
export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (id: IPost["id"], thunkAPI) => {
    return getSinglePostThunk(`/posts/${id}`, thunkAPI);
  }
);

export const getPostComments = createAsyncThunk(
  "posts/getPostComments",
  async (id: IPost["id"], thunkAPI) => {
    let newId = Number(id);
    if (newId > 100) newId -= 100;
    return getPostCommentsThunk(`/posts/${newId}/comments`, thunkAPI);
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost: INewPost, thunkAPI) => {
    return createPostThunk("/posts", newPost, thunkAPI);
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: IPost["id"], thunkAPI) => {
    return deletePostThunk(`/posts/${id}`, thunkAPI);
  }
);

//fix this any
export const updatePost: any = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost: IPost, thunkAPI) => {
    return updatePostThunk(`/posts/${updatedPost?.id}`, updatedPost, thunkAPI);
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetSinglePostState: (state) => {
      state.singlePost = null;
      state.error = "";
    },
    resetPostsState: (state) => {
      state.posts = [];
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    // all posts
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action: any) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPosts.rejected, (state) => {
      (state.isLoading = false), (state.error = "HATA");
    });

    // single post
    builder.addCase(getSinglePost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getSinglePost.fulfilled,
      (state, action: PayloadAction<IPost>) => {
        state.isLoading = false;
        state.singlePost = action.payload;
      }
    );
    builder.addCase(getSinglePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // post comments
    builder.addCase(getPostComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPostComments.fulfilled,
      (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        state.comments = action.payload;
      }
    );
    builder.addCase(getPostComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // create post
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      createPost.fulfilled,
      (state, action: PayloadAction<INewPost>) => {
        state.isLoading = false;
        state.posts = [...state.posts, action.payload];
        state.message = "Post successfully created !";
      }
    );
    builder.addCase(createPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // delete post
    builder.addCase(deletePost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state) => {
      state.isLoading = false;
      state.message = "Post deleted!";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // update post
    builder.addCase(updatePost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      updatePost.fulfilled,
      (state, action: PayloadAction<IPost>) => {
        state.isLoading = false;
        state.message = "Post successfully updated !";
      }
    );
    builder.addCase(updatePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { resetPostsState, resetSinglePostState } = postsSlice.actions;
export default postsSlice.reducer;
