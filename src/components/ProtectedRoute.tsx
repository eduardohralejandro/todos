   
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const ProtectedRoute = ({
    component: Component,
    ...rest
  }: any) => {

    const auth = useSelector((state: any) => state);

    return (
      <Route
        render={props => {
          if (auth?.user?.isLoggedIn) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
  

export default ProtectedRoute;