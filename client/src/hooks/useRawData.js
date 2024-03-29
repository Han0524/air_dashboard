import { useQuery } from '@tanstack/react-query';

import { fetchRawData } from '../api/rawDataApi';

export const useRawData = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['rawData'],
        queryFn: () => fetchRawData(),
    });

    return { isPending, error, data };
};