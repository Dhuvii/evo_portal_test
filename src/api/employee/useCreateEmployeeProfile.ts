import { useMutation } from "react-query";
import fetcher from "../../utilities/fetcher";

const useCreateEmployeeProfile = () => {
  return useMutation(
    ["create-employee-profile"],
    async (body: any): Promise<any> => {
      return await fetcher().post(`employeeProfiles/create`, body);
    }
  );
};

export default useCreateEmployeeProfile;
