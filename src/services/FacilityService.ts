import { api } from '@/adapter';

const getStores = async (payload: any): Promise <any>  => {
  // TODO implement caching
  return api({
    url: "storeLookup", 
    method: "post",
    data: payload,
  });
}

export const FacilityService = {
  getStores
}