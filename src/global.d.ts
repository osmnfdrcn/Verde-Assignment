export {};

declare global {
  interface INewPost {
    userId?: number;
    title: string;
    body: string;
  }

  interface IPost extends INewPost {
    id?: number;
  }

  interface IPosts {
    posts: IPost[];
    singlePost: IPost | null;
    comments: IComment[];
    isLoading: boolean;
    displayAlert: boolean;
    error: any;
    message: string;
  }

  interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  interface IUser {
    user: {
      id: number;
      name: string;
    };
  }
}
