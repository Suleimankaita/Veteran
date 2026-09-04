import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { Apislice } from "./api/Api";
import type { LoginTypes } from "../../../../packages/types";

// User type
type User = {
  id: string;
  _id?: string;
  [key: string]: any;
};

// Entity adapter
const UserAdapter = createEntityAdapter<User>({
  selectId: (user) => user._id ?? user.id,
});

// Initial state
const initialState = UserAdapter.getInitialState();

// API
export const UserSlice = Apislice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllUsers: builder.query<User[], void>({
      query: () => "",
      transformResponse: (response: User[]) => {
        return response;
      },
    }),

    Login: builder.mutation<any, LoginTypes>({
      query: ({Username, Password}) => ({
        url: "Api/Auth/Login",
        method: "POST",
        body: { Username, Password },
      }),
    }),
  }),
});

// Hooks
export const {
  useLoginMutation,
  useGetAllUsersQuery,
} = UserSlice;

// Get users query result
const selectUserResult =
  UserSlice.endpoints.GetAllUsers.select();

// Convert query result into entity state
const selectUserData = createSelector(
  selectUserResult,
  (userResult) => {
    if (!userResult.data) {
      return initialState;
    }

    return UserAdapter.setAll(
      initialState,
      userResult.data.map((user) => ({
        ...user,
        id: user._id ?? user.id,
      }))
    );
  }
);

// Entity selectors
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = UserAdapter.getSelectors(
  (state: any) => selectUserData(state)
);
