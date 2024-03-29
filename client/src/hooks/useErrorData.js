import { useQuery } from '@tanstack/react-query';

import { fetchErrors } from '../api/errorDataApi';

export const useErrors = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['errors'],
        queryFn: () => fetchErrors(),
    });

    return { isPending, error, data };
};