import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../../store/authStore";

const PrivateRoutes = ({ fallbackUrl }: { fallbackUrl: string }) => {
  const { user } = useUserStore();

  return user ? <Outlet /> : <Navigate to={fallbackUrl} />;
};

export default PrivateRoutes;
