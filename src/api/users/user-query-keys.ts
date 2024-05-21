export const userQueryKeys = {
  all: ['users'],
  details: () => [...userQueryKeys.all, 'detail'],
  detail: (id: number) => [...userQueryKeys.details(), id],
  pagination: (page: number) => [...userQueryKeys.all, 'pagination', page],
  infinite: () => [...userQueryKeys.all, 'infinite'],
};
